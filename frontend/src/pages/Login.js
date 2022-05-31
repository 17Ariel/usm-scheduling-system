import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import usmseal from "../assets/usmseal.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const login = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return toast.error("Please Complete!");
    }
    const loginData = { email, password };
    try {
      setloading(true);
      const res = await fetch("http://localhost:8000/faculty/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      const { message, token } = data;
      if (message) {
        setloading(false);
        return toast.error("Wrong Credentials!");
      }
      setloading(false);
      JSON.stringify(localStorage.setItem("token", token));
      JSON.stringify(localStorage.setItem("islogin", true));
      toast.success("Login in sucessfully");
      navigate("/dashboard", { replace: true });
    } catch (e) {
      setloading(false);
      seterror(e.message);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-primary-0 flex justify-center items-center flex-col"
        onSubmit={login}
      >
        <header className="flex justify-center items-center flex-col h-28 w-96">
          <img src={usmseal} alt="seal" className=" h-12 w-12" />
          <h1 className="font-bold text-xl">EXAMINATION SCHEDULE</h1>
          <h1 className="text-xl">UNIVERSITY OF SOUTHERN MINDANAO</h1>
        </header>
        <div className="flex flex-row flex-wrap gap-6 h-72 bg-yellow-400 w-96 justify-center items-center p-2">
          <input
            type="email"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div
            id="btn-container"
            className="w-96 h-14 flex justify-center items-center"
          >
            <button
              type="submit"
              className="text-white bg-blue-700 px-2 py-1 shadow-md rounded-md uppercase w-40"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
