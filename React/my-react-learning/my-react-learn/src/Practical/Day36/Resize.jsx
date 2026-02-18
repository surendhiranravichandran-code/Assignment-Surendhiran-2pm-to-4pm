import { useState, useEffect } from "react";
import "./resize.css";

function ResizeProject() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Window Width</h2>
        <p className="number">{width}px</p>
      </div>
    </div>
  );
}

export default ResizeProject;