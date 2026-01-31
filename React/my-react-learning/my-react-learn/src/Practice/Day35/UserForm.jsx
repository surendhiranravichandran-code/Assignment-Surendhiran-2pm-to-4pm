import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const initialState = {
    name: "",
    email: "",
    agree: false,
  };

  const [formData, setFormData] = useState(initialState);

  // Handle text + checkbox with one function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Prevent form reload
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  // Reset form values
  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Controlled input */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="input"
      />

      {/* Multiple inputs, one state */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />

      {/* Checkbox handling */}
      <label className="checkbox">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to the terms
      </label>

      <div className="actions">
        <button className="button" type="submit">
          Submit
        </button>

        <button
          className="button reset"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default UserForm;
