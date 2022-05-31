import React from "react";
import usmseal from "../assets/usmseal.png";

const Header = () => {
  return (
    <>
      <header className="w-112 h-20 bg-primary-0 flex ml-60 justify-center items-center sticky top-0 gap-24">
        <img src={usmseal} alt="seal" className="h-20 w-20 float-left" />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">UNIVERSITY OF SOUTHERN MINDANAO</h1>
          <h2 className="text-2xl">USM-Main Campus, Kabacan, Cotabato</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
