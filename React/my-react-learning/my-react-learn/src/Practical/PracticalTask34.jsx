import TodoList from "./Day34/TodoList";
import ProductList from "./Day34/ProductList";
import UserList from "./Day34/UserList";
import ToggleList from "./Day34/ToggleList";
import DataCheck from "./Day34/DataCheck";

function PracticalTask34() {
  return (
    <>
     <div style={{ display: "grid", gap: "20px" }}></div>
      <TodoList />
      <ProductList />
      <UserList />
      <ToggleList />
      <DataCheck />
    </>
  );
}

export default PracticalTask34;
