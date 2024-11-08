import React from "react";

function Home({ setCurrentPage }) {
  return (
    <div className="home-container">
      <h1>Welcome to My Home Page!</h1>
      <p>This is the home page of my React application.</p>
      <div>
        <button className="button" onClick={() => setCurrentPage("signin")}>
          Sign In
        </button>
        <button className="button" onClick={() => setCurrentPage("signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
