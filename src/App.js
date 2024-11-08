import React, { useState } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "signin":
        return <SignIn setCurrentPage={setCurrentPage} />;
      case "signup":
        return <SignUp setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
