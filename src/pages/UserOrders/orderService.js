import axios from "axios";

const API_URL = "http://localhost:8000/api/order";

const fetchOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/getAllOrders`);
    const allOrders = response.data.data || [];
    // Filter orders by userId
    const userOrders = allOrders.filter((order) => order.userId === userId);
    return userOrders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const orderService = {
  fetchOrdersByUserId,
};
