import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css"; // Added this :boom:
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/Compoents/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1> Home </h1>
    </div>
  );
}

export default App;
