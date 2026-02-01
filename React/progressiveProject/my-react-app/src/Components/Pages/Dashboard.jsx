import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import Child from "../Child";

function Dashboard({ role = "user" }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    // Simulated API call
    setTimeout(() => {
      const success = true; // change to false to simulate error
      if (success) {
        setUsers([
          { id: 1, name: "Suren", role: "Admin" },
          { id: 2, name: "Karthik", role: "User" },
          { id: 3, name: "Priya", role: "User" },
        ]);
        setLoading(false);
      } else {
        setError("Failed to fetch data");
        setLoading(false);
      }
    }, 1500);
  }, []);

  return (
    <div>
      <h2>{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h2>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {users.map(user => (
            <div key={user.id} className="user-card">
              <Child message={`${user.name} - ${user.role}`} />
              {role === "admin" && <Button text="Edit" className="primary" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
