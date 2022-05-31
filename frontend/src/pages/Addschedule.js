import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Addschedule = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  const [time, settime] = useState("");
  const [proctor, setproctor] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [day, setday] = useState("");
  const [date, setdate] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const { data } = useFetch("http://localhost:8000/faculty");

  const createschedule = async (e) => {
    e.preventDefault();

    if (
      time === "" ||
      proctor === "" ||
      location === "" ||
      email === "" ||
      day === "" ||
      date === ""
    ) {
      return toast.error("Please Complete!");
    }

    const registerData = {
      time,
      proctor,
      location,
      email,
      day,
      date,
    };
    console.log(registerData);
    try {
      setloading(true);
      const api = await fetch("http://localhost:8000/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify(registerData),
      });
      const data = await api.json();
      const { message } = data;
      if (message) {
        setloading(false);
        return toast.error("Already schedule");
      }
      setloading(false);
      navigate("/admin/dashboard");
      toast.success("Successfully created the schedule");
    } catch (e) {
      setloading(false);
      seterror(e.message);
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="h-102 flex justify-center items-center" id="register">
      <form
        className="bg-primary-0 flex justify-center items-center flex-col"
        id="registerForm"
        onSubmit={createschedule}
      >
        <header className="flex justify-center items-center flex-col h-10 w-98">
          <h1 className="font-bold text-xl text-white">Add Schedule</h1>
        </header>
        <div className="flex flex-row flex-wrap gap-6 h-100 bg-yellow-400 w-98 justify-center items-center p-2">
          <input
            type="text"
            className="border border-black px-3 py-1 w-96 h-8"
            placeholder="ROOM LOCATION"
            id="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          <input
            type="text"
            className="border border-black px-3 py-1 w-96 h-8"
            placeholder="Time"
            id="time"
            value={time}
            onChange={(e) => settime(e.target.value)}
          />
          <input
            type="text"
            className="border border-black px-3 py-1 w-96 h-8"
            placeholder="Day"
            id="day"
            value={day}
            onChange={(e) => setday(e.target.value)}
          />
          <input
            type="date"
            className="border border-black px-3 py-1 w-96 h-8"
            placeholder="Date"
            id="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          <select
            className="border border-black px-3 py-1 w-96 h-8"
            id="proctor"
            value={proctor}
            onChange={(e) => setproctor(e.target.value)}
          >
            <option value="proctor">Select proctor</option>
            {data.map((faculty) => (
              <option
                value={`${faculty.firstname} ${faculty.lastname}`}
                key={faculty._id}
              >
                {`${faculty.firstname} ${faculty.lastname}`}
              </option>
            ))}
          </select>
          <select
            className="border border-black px-3 py-1 w-96 h-8"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          >
            <option value="email">Select email</option>
            {data.map((faculty) => (
              <option value={`${faculty.email}`} key={faculty._id}>
                {`${faculty.email}`}
              </option>
            ))}
          </select>
          <div
            id="btn-container"
            className="w-96 h-14 flex justify-center items-center"
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

export default Addschedule;
