import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const login = localStorage.getItem("login");
  const { data, loading, error } = useFetch("http://localhost:8000/schedule");
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (login) {
      navigate("/admin/dashboard");
    }
  }, [user, login]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-5 w-full">
      <h1 className="text-3xl font-bold">Examination Schedule</h1>
      <div className="bg-silver-0 px-4 py-2 border-t-8 rounded-t-md border-t-danger-0 ">
        <Table data={data} />
      </div>
    </div>
  );
};

export default AdminDashboard;
