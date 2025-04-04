import React from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles/Global.css"; 

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
