import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import MasterHead from "./MasterHead";
import Portfolio from "./Portfolio";
import About from "./About";
import ContactDetails from "./Contact";
import Footer from "./Footer";
import CopyRight from "./CopyRight";


const App = () => (
    <div>
        <Navbar />
        <MasterHead />
        <Portfolio />
        <About />
        <ContactDetails />
        <Footer />
        <CopyRight />
    </div>
)

export default App;