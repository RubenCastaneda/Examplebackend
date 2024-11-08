import React, { useState } from "react";

function SignUp({ setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(
      `Username: ${username}, Password: ${password}, ID Number: ${idNumber}`
    );
    setCurrentPage("home");
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
