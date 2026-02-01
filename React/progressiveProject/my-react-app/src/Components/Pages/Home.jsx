import User from "../User";
import Button from "../Buttons/Button";
import Child from "../Child";

function Home() {
  const users = [
    { id: 1, name: "Suren", role: "Admin" },
    { id: 2, name: "Karthik", role: "User" }
  ];

  return (
    <>
      <h2>Home Page</h2>

      <User name="Home User" />
      
      <Child message="Welcome to Home Page!" />

      <div>
        <h3>User List</h3>
        {users.map(u => <Child key={u.id} message={`${u.name} - ${u.role}`} />)}
      </div>

      <Button>
        <span>🚀</span> Sample Button
      </Button>
    </>
  );
}

export default Home;
