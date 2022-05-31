import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
const Profile = () => {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  const { data, loading, error } = useFetch(
    "http://localhost:8000/faculty/me",
    user
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error);
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-5">
      <h1 className="text-3xl font-bold">Personal Details</h1>
      <div className="bg-warning-0 flex gap-2 px-6 py-4 w-98 h-16">
        <h2 className="font-bold">FIRST NAME:</h2>
        <p>{data.firstname}</p>
      </div>
      <div className="bg-warning-0 flex gap-2 px-6 py-4 w-98 h-16">
        <h2 className="font-bold">LAST NAME:</h2>
        <p>{data.lastname}</p>
      </div>
      <div className="bg-warning-0 flex gap-2 px-6 py-4 w-98 h-16">
        <h2 className="font-bold">POSITION:</h2>
        <p>{data.position}</p>
      </div>
      <div className="bg-warning-0 flex gap-2 px-6 py-4 w-98 h-16">
        <h2 className="font-bold">USM EMAIL:</h2>
        <p>{data.email}</p>
      </div>
      <div className="bg-warning-0 flex gap-2 px-6 py-4 w-98 h-16">
        <h2 className="font-bold">COLLEGE ASSIGNED:</h2>
        <p>{data.college}</p>
      </div>
    </div>
  );
};

export default Profile;
