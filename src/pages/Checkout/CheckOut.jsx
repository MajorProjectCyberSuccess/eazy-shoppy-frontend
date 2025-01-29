import "./CheckOut.css";
import { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const CheckOut = () => {
  const [countries, setCountries] = useState([]); // Stores the list of countries
  const [selectedCountry, setSelectedCountry] = useState(""); // Tracks the selected country
  const [cartItems, setCartItems] = useState([]); // Stores the cart items
  const [cartTotal, setCartTotal] = useState(0); // Stores the cart total
  const [addresses, setAddresses] = useState([]); // Stores the user's addresses
  const [selectedAddress, setSelectedAddress] = useState(null); // Tracks the selected address
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  }); // Tracks the new address input

  // Fetch countries
  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      const countryData = response.data.data || [];
      // Extract unique country names
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
      const sessionId = localStorage.getItem("sessionId");
      const response = await axios.get("/api/cart/items", {
        params: {
          sessionId,
          userId: null, // Replace with actual userId if logged in
        },
      });
      setCartItems(response.data);
      const total = response.data.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      setCartTotal(total);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  // Fetch user addresses
  const fetchAddresses = async () => {
    try {
      const userId = null; // Replace with actual userId if logged in
      const response = await axios.get(`/api/addresses/user/${userId}`);
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  // Handle country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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
      const userId = null; // Replace with actual userId if logged in
      const response = await axios.post("/api/addresses", {
        ...newAddress,
        userId,
      });
      setAddresses((prevAddresses) => [...prevAddresses, response.data]);
      setSelectedAddress(response.data);
    } catch (error) {
      console.error("Error saving new address:", error);
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (!selectedAddress) {
      alert("Please select or add an address");
      return;
    }

    try {
      const userId = null; // Replace with actual userId if logged in
      await axios.post("/api/orders", {
        userId,
        addressId: selectedAddress.id,
        cartItems,
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
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
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Full Name*"
                      variant="outlined"
                      fullWidth
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

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Street Address*"
                      variant="outlined"
                      fullWidth
                      name="street"
                      value={newAddress.street}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="City*"
                      variant="outlined"
                      fullWidth
                      name="city"
                      value={newAddress.city}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="State*"
                      variant="outlined"
                      fullWidth
                      name="state"
                      value={newAddress.state}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Zip Code*"
                      variant="outlined"
                      fullWidth
                      name="zipCode"
                      value={newAddress.zipCode}
                      onChange={handleNewAddressChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Phone Number*"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h3>Select Address</h3>
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

              <div className="row">
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
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <p>
                      {item.product.name} - ${item.product.price} x{" "}
                      {item.quantity}
                    </p>
                  </div>
                ))}
                <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
              </div>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCheckout}
              >
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
