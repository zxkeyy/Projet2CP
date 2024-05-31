import useOrders from "../../../Hooks/UseOrders";

const OrderDashboard = () => {
  const { data, status, error } = useOrders();
  console.log(data);
  const orders = data?.Orders;
  return <div>OrderDashboard</div>;
};

export default OrderDashboard;
