import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Dashboard from "../Pages/Dashboard";
import "./Layout.css";

function Layout({ children }) {
  const [dark, setDark] = useState(false);
  const [role, setRole] = useState("admin");

  return (
    <div className={`layout ${dark ? "dark" : "light"}`}>
      <Header />

      <button className="toggle-btn" onClick={() => setDark(!dark)}>
        Toggle {dark ? "Light" : "Dark"}
      </button>

      <button className="toggle-btn" onClick={() => setRole(role === "admin" ? "user" : "admin")}>
        Switch Role ({role})
      </button>

      <hr />

      <Dashboard role={role} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
