import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cart items from the backend on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      setIsLoading(true);
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setError("User not logged in.");
          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          "http://localhost:8000/api/cart/getAllCarts",
          {
            headers: {
              Authorization: `Bearer ${userId}`,
            },
          }
        );
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setError("Failed to fetch cart items.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Add item to cart
  const addToCart = async (product) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const cartRequestWrapper = {
        productId: product.productId,
        quantity: product.quantity || 1,
      };

      await axios.post(
        "http://localhost:8000/api/cart/create",
        cartRequestWrapper,
        {
          headers: {
            Authorization: `Bearer ${userId}`,
          },
        }
      );
      alert("Item added");

      // Fetch updated cart items
      // const response = await axios.get(
      //   "http://localhost:8000/api/cart/getAllCarts",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${userId}`,
      //     },
      //   }
      // );
      // setCartItems(response.data.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Failed to add item to cart.");
    }
  };

  // Update item quantity in cart
  const updateQuantity = async (id, action) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to update cart items.");
      return;
    }

    try {
      const item = cartItems.find((item) => item.id === id);
      if (!item) {
        setError("Item not found in cart.");
        return;
      }

      const newQuantity =
        action === "increment"
          ? item.quantity + 1
          : Math.max(1, item.quantity - 1);
      const cartRequestWrapper = {
        productId: id,
        quantity: newQuantity,
      };

      await axios.post(
        "http://localhost:8000/api/cart/create",
        cartRequestWrapper,
        {
          headers: {
            Authorization: `Bearer ${userId}`,
          },
        }
      );

      // // Fetch updated cart items
      // const response = await axios.get(
      //   "http://localhost:8000/api/cart/getAllCarts",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${userId}`,
      //     },
      //   }
      // );
      // setCartItems(response.data);
    } catch (error) {
      console.error("Error updating cart item:", error);
      setError("Failed to update item quantity.");
    }
  };

  // Remove item from cart
  const removeFromCart = async (id) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to remove items from the cart.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/cart/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      });

      // Fetch updated cart items
      const response = await axios.get(
        "http://localhost:8000/api/cart/getAllCarts",
        {
          headers: {
            Authorization: `Bearer ${userId}`,
          },
        }
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      setError("Failed to remove item from cart.");
    }
  };

  // Wishlist operations (local state for now)
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((item) => item.productId === product.productId)) {
        return prevItems; // Avoid duplicates
      }
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.productId !== id)
    );
  };

  const moveToCart = (product) => {
    removeFromWishlist(product.productId);
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        isLoading,
        error,
        addToCart,
        updateQuantity,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
