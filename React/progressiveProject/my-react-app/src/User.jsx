import { useEffect, useState } from "react";

function User({ name }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;

    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Users" : "Show Users"}
      </button>

      {/* Loader */}
      {loading && <p>Loading users...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Data */}
      {!loading && !error && show && users.length > 0 && (
        <>
          <p>Logged in as: {name}</p>

          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Empty */}
      {!loading && show && users.length === 0 && !error && (
        <p>No users available</p>
      )}
    </div>
  );
}

export default User;
