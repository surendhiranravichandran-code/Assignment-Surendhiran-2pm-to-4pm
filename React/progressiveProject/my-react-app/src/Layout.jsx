import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
         alignItems: "center"
      }}
    >
      <Header />

      <button onClick={() => setDark(!dark)}>
        Toggle {dark ? "Light" : "Dark"}
      </button>

      <hr />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
