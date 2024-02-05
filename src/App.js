import React from "react";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import TokenTimeline from "./components/TokenTimeline";
import Roadmap from "./components/Roadmap";
import Tokenomic from "./components/Tokenomic";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />      
      <AboutUs/>

      <TokenTimeline />
      <Roadmap />
      <Tokenomic />
      <Footer />
    </React.Fragment>
  );
}
