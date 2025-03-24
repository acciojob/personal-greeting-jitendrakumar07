import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // State to store user input
  const [name, setName] = useState("");

  // Handle input change and update the state
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <div id="main" style={{ textAlign: "center", marginTop: "50px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          {name ? `Hello, ${name}!` : ""}
        </p>
      </div>
    </div>
  );
};

export default App;
