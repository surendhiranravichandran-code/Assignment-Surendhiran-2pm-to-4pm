import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const [dark, setDark] = useState(false);
  const role = "admin"; // change to "user" to test

  return (
    <div
      style={{
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Header />

      <button onClick={() => setDark(!dark)}>
        Toggle {dark ? "Light" : "Dark"}
      </button>

      <h3>{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h3>

      <hr style={{ width: "100%" }} />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
