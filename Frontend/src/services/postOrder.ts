import APIClient from "./api-client";

export interface Order {
  products: { productId: string; quantity: number }[];
  total_price: number;
}

const apiClient = new APIClient<{order: Order}>("/orders/createOrder");

const postOrder = (data: Order) => {
  return apiClient.post({ order: data});
};

export default postOrder;