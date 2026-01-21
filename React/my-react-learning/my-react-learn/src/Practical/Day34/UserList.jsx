import "./UserList.css";

function UserList() {
  const users = [
    { id: 1, name: "Suren", role: "Developer" },
    { id: 2, name: "Arun", role: "Tester" },
    { id: 3, name: "Priya", role: "Designer" }
  ];

  return (
    <div className="container">
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <strong>{user.name}</strong> - {user.role}
        </div>
      ))}
    </div>
  );
}

export default UserList;
