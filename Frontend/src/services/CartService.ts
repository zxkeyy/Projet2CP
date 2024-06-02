import { create } from "zustand";
import useProduct from "../Hooks/useProduct";

export interface CartItem {
  id: string;
  quantity: number;
}

function addToCart(item: CartItem): void {
  let cart: Record<string, CartItem> = getCart();
  cart[item.id] = item;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart(): Record<string, CartItem> {
  const cartObj = localStorage.getItem("cart");
  const cart = cartObj ? JSON.parse(cartObj) : {};
  return cart ? cart : {};
}

function clearCart(): void {
  localStorage.removeItem("cart");
}

function calculateTotal(): number {
  const cart = getCart();
  let total = 0;
  for (let id in cart) {
    let { data } = useProduct(id);
    if (data?.Product.price) {
      total = total + data?.Product.price;
    }
  }
  return total;
}

interface CartStore {
  cart: Record<string, CartItem>;
  updateCart: () => void;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: getCart(),
  updateCart: () =>
    set(() => {
      return { cart: getCart() };
    }),
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

export default { addToCart, getCart, clearCart, calculateTotal, useCartStore };
