const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require("../model/productSchema")
const {User} = require("../model/userModel")
const { Order } = require("../model/orderModel");

const createCheckSession = async (req,res) =>{
    const { products, total_price } = req.body;
    for (const product of products) {
        const existingProduct = await Product.findById(product.productId); //add the product collection  from islem code
        if (!existingProduct) {
          return res.status(400).json(`Product ${product.productId} not found`);
        }
        if (existingProduct.quantity < product.quantity) {
          return res
            .status(400)
            .json(`Insufficient quantity for product ${product.productId}`);
        }
      }
    const userId = req.user._id
     console.log("id user : "+(userId))
    const productDetails = await Promise.all(products.map(async (product) => {
            const productData = await Product.findOne({_id:product.productId});
            return {
                name: productData.name,
                price: productData.price,
                quantity: product.quantity,
            };
        })
        )

    const line_items = productDetails.map(product => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.name,
            },
            unit_amount: product.price * 100, // price in cents
        },
        quantity: product.quantity,
    }));
    console.log(line_items)

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:5173/cancel`,
            metadata: {
                userId : String(userId),
                products: JSON.stringify(products),
                total_price : String(total_price)
            },
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const stripeWebHook = async (req,res) =>  {
    const sig = req.headers['stripe-signature'];
    let event;
    const endpointSecret = "whsec_00a1518728a9142c9ac9acd5463b1d9b56e1989035475664507e7e78dc13c3a8";
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed.', err);
        return res.sendStatus(400);
    }

    // Handle specific event typespayment_intent.succeeded
    if (event.type === 'checkout.session.completed') {
         const session = event.data.object;
         const { userId, products,total_price } = session.metadata;
        console.log(userId , products)
        //Extract product details from metadata
         const productDetails = JSON.parse(products);
         console.log(productDetails)

         const newOrder = new Order({
            user_id: userId,
            products: productDetails.map((product) => ({
              productId: product.productId,
              quantity: product.quantity,
            })),
            total_price: total_price,
            payment_status: "paid",
          });
          await newOrder.save();
        try {
            // Create order based on product details
            //await createOrder({ products: productDetails, total_price: session.amount_total, userId });
            console.log('Order created successfully');
            return res.json({ received: true });
        } catch (error) {
            console.error('Error creating order:', error);
            return res.status(500).json({ error: 'Error creating order' });
        }
    }else console.log("else")

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
}
module.exports = {createCheckSession,stripeWebHook}
