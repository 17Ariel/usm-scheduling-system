import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
const Register = () => {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [position, setposition] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [campus, setcampus] = useState("");
  const [college, setcollege] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const createFaculty = async (e) => {
    e.preventDefault();

    if (
      firstname === "" ||
      lastname === "" ||
      position === "" ||
      email === "" ||
      password === "" ||
      confirm === "" ||
      campus === "" ||
      college === ""
    ) {
      return toast.error("Please Complete!");
    }
    if (password !== confirm) {
      return toast.error("Password doesnt match");
    }

    const registerData = {
      firstname,
      lastname,
      position,
      email,
      password,
      campus,
      college,
    };
    try {
      setloading(true);
      const api = await fetch("http://localhost:8000/faculty/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const data = await api.json();
      const { message } = data;
      if (message) {
        setloading(false);
        return toast.success(message);
      }
      setloading(false);
      navigate("/login");
      toast.success("Successfully created the account");
    } catch (e) {
      setloading(false);
      seterror(e.message);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="h-screen flex justify-center items-center" id="register">
      <form
        className="bg-primary-0 flex justify-center items-center flex-col"
        id="registerForm"
        onSubmit={createFaculty}
      >
        <header className="flex justify-center items-center flex-col h-10 w-110">
          <h1 className="font-bold text-xl text-white">REGISTRATION</h1>
        </header>
        <div className="flex flex-row flex-wrap gap-6 h-80 bg-yellow-400 w-110 justify-center items-center p-2">
          <input
            type="text"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="FIRST NAME"
            id="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            type="text"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="LAST NAME"
            id="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          <input
            type="text"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="POSITION"
            id="position"
            value={position}
            onChange={(e) => setposition(e.target.value)}
          />
          <input
            type="text"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="USM EMAIL"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="PASSWORD"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type="password"
            className="border border-black px-3 py-1 w-72 h-8"
            placeholder="CONFIRM PASSWORD"
            id="cpassword"
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
          />
          <select
            className="border border-black px-3 py-1 w-72 h-8 uppercase"
            id="campus"
            value={campus}
            onChange={(e) => setcampus(e.target.value)}
          >
            <option value="--SELECT CAMPUS--">--SELECT CAMPUS--</option>
            <option value="Main Campus">Main Campus</option>
            <option value="Kidapawan Campus">Kidapawan Campus</option>
          </select>
          <select
            className="border border-black px-3 py-1 w-72 h-8 uppercase"
            id="college"
            value={college}
            onChange={(e) => setcollege(e.target.value)}
          >
            <option value="--SELECT COLLEGE--">--SELECT COLLEGE--</option>
            <option value="College of Agriculture">
              College of Agriculture
            </option>
            <option value="College of Arts and Science">
              College of Arts and Science
            </option>
            <option value="College of Business Development Economics and Management">
              College of Business Development Economics and Management
            </option>
            <option value="College of Education">College of Education</option>
            <option value="College of Engineering & Information Technology">
              College of Engineering & Information Technology
            </option>
            <option value="College of Health Science">
              College of Health Science
            </option>
            <option value="College of Human Ecology & Food Sciences">
              College of Human Ecology & Food Sciences
            </option>
            <option value="College of Trade & Industry">
              College of Trade & Industry
            </option>
            <option value="Institute of Middle East & Asian Studies">
              Institute of Middle East & Asian Studies
            </option>
            <option value="Institute of Sports Physical Education and Recreation">
              Institute of Sports Physical Education and Recreation
            </option>
            <option value="College f Veterinary Medicine">
              College f Veterinary Medicine
            </option>
          </select>
          <div
            id="btn-container"
            className="w-80 h-14 flex justify-center items-center"
          >
            <button
              type="submit"
              className="text-white bg-blue-700 px-4 py-2 shadow-md rounded-md uppercase"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
