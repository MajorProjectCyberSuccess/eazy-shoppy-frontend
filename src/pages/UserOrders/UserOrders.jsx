import { useEffect, useState } from "react";
import { orderService } from "./orderService";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId"); // Get the logged-in user's ID

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await orderService.fetchOrdersByUserId(userId);
        setOrders(userOrders);
      } catch (error) {
        setError("Failed to fetch orders. Please try again.");
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>Order ID: {order.id}</h3>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <p>Address ID: {order.addressId}</p>
            <h4>Items:</h4>
            <ul>
              {order.orderItems.map((item) => (
                <li key={item.productId}>
                  Product ID: {item.productId}, Quantity: {item.quantity},
                  Price: ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default UserOrders;
