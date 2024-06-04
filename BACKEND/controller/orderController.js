const { User } = require("../model/userModel");
const { Order } = require("../model/orderModel");
const Product = require("../model/productSchema");
//create order
const createOrder = async (req, res) => {
  const { products, total_price, phoneNumber, address } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("User not found");
    }

    // Verify each product in the order
    for (const product of products) {
      const existingProduct = await Product.findById(product._id); //add the product collection  from islem code
      if (!existingProduct) {
        return res.status(400).json(`Product ${product.productId} not found`);
      }
      if (existingProduct.qty < product.quantity) {
        return res
          .status(400)
          .json(`Insufficient quantity for product ${product.productId}`);
      }
    }

    const newOrder = new Order({
      user_id: user._id,
      products: products.map((product) => ({
        productId: product.productId,
        quantity: product.quantity,
      })),
      total_price: total_price,
      phoneNumber: phoneNumber,
      address: address,
    });
    await newOrder.save();

    return res.status(201).json(`Order created successfully: ${newOrder}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error from the server");
  }
};

//get All Order for Admin
const getAllOrder = async (req, res) => {
  try {
    const order = await Order.find();
    if (!order) {
      return res.status(400).json("order not found");
    }
    return res.status(201).json(`${order}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
//all user order
const getAllUserOrder = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json("user not found ");
    }
    const order = await Order.find({ user_id: user._id });
    if (!order) {
      return res.status(400).json("order not found");
    }
    return res.status(201).json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error from the server ");
  }
};
module.exports = { createOrder, getAllOrder, getAllUserOrder };
