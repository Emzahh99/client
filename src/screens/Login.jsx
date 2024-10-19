// src/App.js
import React, { useState } from "react";

//import NavBar from "./components/NavBar";    

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Perform your sign-in logic here, such as sending the data to an API
      console.log("Signing in with:", { email, password });
    }
  };

  return (
    <div> 
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default App;