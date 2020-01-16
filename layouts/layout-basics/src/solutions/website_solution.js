import React from "react";
import Hero from "./exercise1/exercise1_solution";
import Navbar from "./exercise2/exercise2_solution";
import MainContent from "./exercise3/exercise3_solution";

const Website = () => {
  return (
    <main style={{ maxWidth: "1280px", margin: "auto" }}>
      <Navbar />
      <Hero />
      <MainContent />
    </main>
  );
};

export default Website;
