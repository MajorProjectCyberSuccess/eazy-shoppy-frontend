import "./CheckOut.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CheckOut = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    userId: localStorage.getItem("userId"),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch countries
  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      const countryData = response.data.data || [];
      const uniqueCountries = [
        ...new Set(countryData.map((item) => item.country)),
      ];
      setCountries(uniqueCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  // Fetch cart items and total
  const fetchCartData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8000/api/cart/items?userId=${userId}`
      );
      setCartItems(response.data);

      const total = response.data.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      setCartTotal(total);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      alert("Failed to fetch cart items. Please try again.");
    }
  };

  // Fetch user addresses
  const fetchAddresses = async () => {
    setLoading(true);
    setError(null);
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8000/api/address/getAddressesByUserId?userId=${userId}`
      );
      setAddresses(response.data.data);
    } catch (error) {
      setError("Failed to fetch addresses. Please try again.");
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setNewAddress((prevState) => ({
      ...prevState,
      country: event.target.value,
    }));
  };

  // Handle address selection
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  // Handle new address input change
  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Save new address
  const handleSaveNewAddress = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "http://localhost:8000/api/address/create",
        {
          ...newAddress,
          userId,
        }
      );
      setAddresses((prevAddresses) => [...prevAddresses, response.data.data]);
      setSelectedAddress(response.data.data);
      alert("Address saved successfully!");
    } catch (error) {
      console.error("Error saving new address:", error);
      alert("Failed to save address. Please try again.");
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!selectedAddress) {
      alert("Please select or add an address");
      return;
    }

    setCheckoutLoading(true); // Show loading spinner
    setError(null);

    try {
      const userId = localStorage.getItem("userId");
      const orderPayload = {
        userId,
        addressId: selectedAddress.id,
        cartItems: cartItems.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
        totalAmount: cartTotal,
      };

      const response = await axios.post(
        "http://localhost:8000/api/orders",
        orderPayload
      );
      console.log(response);
      // Clear the cart after placing the order
      setCartItems([]);
      setCartTotal(0);

      // Redirect to the orders page
      navigate("/shop/orders");
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Failed to place order. Please try again.");
    } finally {
      setCheckoutLoading(false); // Hide loading spinner
    }
  };

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
    fetchCartData();
    fetchAddresses();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">BILLING DETAILS</h2>
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <FormControl fullWidth>
                      <InputLabel id="country-select-label">Country</InputLabel>
                      <Select
                        labelId="country-select-label"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        label="Country"
                        required
                      >
                        {countries.map((country, index) => (
                          <MenuItem value={country} key={index}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Street Address"
                      variant="outlined"
                      fullWidth
                      name="street"
                      value={newAddress.street}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      name="city"
                      value={newAddress.city}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="State"
                      variant="outlined"
                      fullWidth
                      name="state"
                      value={newAddress.state}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Zip Code"
                      variant="outlined"
                      fullWidth
                      name="zipCode"
                      value={newAddress.zipCode}
                      onChange={handleNewAddressChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h3 className="m-3">Select Address</h3>
                  {loading && <p>Loading addresses...</p>}
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      onClick={() => handleAddressSelect(address)}
                      style={{
                        border:
                          selectedAddress?.id === address.id
                            ? "2px solid blue"
                            : "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <p>
                        {address.street}, {address.city}, {address.state},{" "}
                        {address.zipCode}, {address.country}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="row m-2">
                <div className="col-md-12">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveNewAddress}
                  >
                    Save New Address
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h2 className="hd">YOUR ORDER</h2>
              <div className="order-summary">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <p>
                        {item.product.name} - ${item.product.price} x{" "}
                        {item.quantity}
                      </p>
                    </div>
                  ))
                )}
                <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
              </div>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
                disabled={checkoutLoading || cartItems.length === 0} // Disable button if cart is empty or loading
              >
                {checkoutLoading ? (
                  <CircularProgress size={24} color="inherit" /> // Show loading spinner
                ) : (
                  "Place Order"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
