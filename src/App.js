import Shipments from "./components/Shipments";
import AddShipment from "./components/Addshipment";
import ShipmentDetails from "./components/ShipmentDetails";
import ShipmentJournalDetails from "./components/ShipmentJournalDetails";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./css/aos.css";
import "./App.css";
import "./css/style.css";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";

function App() {
  useEffect(() => {
    // initialize AOS animation package
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <ProtectedRoute
          exact
          path="/shipments"
          component={Shipments}
        ></ProtectedRoute>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route>
        <Route exact path="/test" component={Testimonials}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <ProtectedRoute
          exact
          path="/addnew"
          component={AddShipment}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/shipmentdetails"
          component={ShipmentDetails}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/shipmentjournaldetails"
          component={ShipmentJournalDetails}
        ></ProtectedRoute>
      </Router>
    </>
  );
}

export default App;
