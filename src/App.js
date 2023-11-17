import "./App.css";
import Auctions from "./components/Offerings";
import Footer from "./components/Footer";
import AppNavbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ContactUs from "./components/ContactUs";
import Offerings from "./components/Offerings";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Welcome />
      <Offerings />
      <Discover />
      <ContactUs/>
      <Navbar/>
      <Footer />
    </div>
  );
}

export default App;
