import Cookies from "universal-cookie";

const cookies = new Cookies();

interface CartItem {
  id: string;
  quantity: number;
}

function addToCart(item: CartItem): void {
  let cart: Record<string, CartItem> = getCart();
  cart[item.id] = item;
  cookies.set("cart", JSON.stringify(cart), {
    path: "/",
  });
}

function getCart(): Record<string, CartItem> {
  const cartObj = cookies.get("cart");
  return cartObj ? cartObj : {};
}

function clearCart(): void {
  cookies.remove("cart");
}

export default { addToCart, getCart, clearCart };
