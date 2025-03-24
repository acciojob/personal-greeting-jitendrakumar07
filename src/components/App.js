
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
      />
      <p style={{ fontSize: "24px", marginTop: "20px" }}>
        {name ? `Hello, ${name}!` : ""}
      </p>
    </div>
  )
}

export default App
