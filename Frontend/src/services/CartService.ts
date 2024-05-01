import Cookies from "universal-cookie";
import { create } from "zustand";

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

interface CartStore {
  cart: Record<string, CartItem>;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: getCart(),
  addToCart: (item: CartItem) =>
    set(() => {
      addToCart(item);
      return { cart: getCart() };
    }),
  clearCart: () =>
    set(() => {
      clearCart();
      return { cart: getCart() };
    }),
}));

export default { addToCart, getCart, clearCart, useCartStore };
