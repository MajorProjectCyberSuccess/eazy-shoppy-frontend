import { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Add a review</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Rating
          </label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "20px",
                cursor: "pointer",
                color: formData.rating >= star ? "gold" : "gray",
              }}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <textarea
            name="comment"
            placeholder="Write Comment"
            value={formData.comment}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              fontSize: "16px",
            }}
            required
          />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ flex: "1", padding: "10px", fontSize: "16px" }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ flex: "1", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="url"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
