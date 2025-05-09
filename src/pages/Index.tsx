
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import PowerUps from "../components/PowerUps";
import Schedule from "../components/Schedule";
import Leaderboard from "../components/Leaderboard";
import JoinUs from "../components/JoinUs";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="super-mario-page">
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <Mission />
        <PowerUps />
        <Schedule />
        <Leaderboard />
        <JoinUs />
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
