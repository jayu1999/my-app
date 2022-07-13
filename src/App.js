import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css"; // Added this :boom:
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/Compoents/Navbar";
import Home from "../src/Compoents/Home";
import Login from "../src/Compoents/Login";
import Register from "./Compoents/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
