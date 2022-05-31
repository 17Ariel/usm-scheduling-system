import React from "react";
import { Link } from "react-router-dom";
import usmseal from "../assets/usmseal.png";
const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="h-100 w-96 bg-primary-0 flex justify-center items-center flex-col gap-8">
        <header className="flex justify-center items-center flex-col border-b-2 border-b-black w-96">
          <img src={usmseal} alt="seal" className=" h-24 w-24" />
          <h1 className="font-bold text-xl">EXAMINATION SCHEDULE</h1>
          <h1 className="text-xl">UNIVERSITY OF SOUTHERN MINDANAO</h1>
        </header>
        <div className="flex flex-col gap-6">
          <Link
            className="text-black bg-yellow-400 px-2 py-1 shadow-md rounded-md text-center"
            to="/login"
          >
            SIGN IN
          </Link>
          <Link
            className="text-white bg-blue-700 px-2 py-1 shadow-md rounded-md"
            to="/register"
          >
            CREATE ACCOUNT
          </Link>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-center">or</p>
            <Link
              className="text-center hover:underline-offset-1"
              to="/admin/login"
            >
              as Admin
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
