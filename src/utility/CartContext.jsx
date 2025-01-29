import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage on initialization
    const savedCart = localStorage.getItem("eazyShoppyCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("eazyShoppyWishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("eazyShoppyCart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("eazyShoppyWishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, { ...product }];
    });
  };

  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Wishlist operations
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        return prevItems; // Avoid duplicates
      }
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const moveToCart = (product) => {
    removeFromWishlist(product.id);
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
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
