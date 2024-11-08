import React, { useState } from "react";

function SignIn({ setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
    setCurrentPage("home");
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
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
        <button type="submit" className="button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
