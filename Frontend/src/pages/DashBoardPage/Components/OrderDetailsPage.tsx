import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

  return (
    <div>{id}</div>
  )
}

export default OrderDetailsPage