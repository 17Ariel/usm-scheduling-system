import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";
import useFind from "../hooks/useFind";
import { convertdate } from "../utils/dateutils";

const Dashboard = () => {
  console.disableYellowBox = true;
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const islogin = localStorage.getItem("islogin");
  const [day, setday] = useState("Day 1");
  const { data: result } = useFetch("http://localhost:8000/schedule/distinct");
  const { data, loading, error } = useFind(
    `http://localhost:8000/schedule/filter/${day}`
  );
  const { data: dates } = useFind(`http://localhost:8000/schedule/date/${day}`);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (islogin) {
      navigate("/dashboard");
    }
  }, [user, +day]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  const changeDay = (days) => {
    setday(days);
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-5 w-full mb-12">
      <h1 className="text-3xl font-bold">Examination Schedule</h1>
      <div className="flex flex-col ml-8">
        <div className="flex gap-4">
          {result.map((item, index) => (
            <button
              key={index}
              onClick={() => changeDay(item)}
              className={
                day === item
                  ? " bg-primary-0 px-4 py-2 text-white"
                  : "bg-light-0 px-4 py-2 text-gray-500"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-silver-0 px-4 py-2 border-t-8 rounded-t-md border-t-danger-0 ">
          {dates.map((items, indexes) => (
            <h1
              key={indexes}
              ss
              className=" bg-secondary-0 h-8 w-32 mb-2 flex justify-center items-center border border-gray-700"
            >
              <span className="">{convertdate(items)}</span>
            </h1>
          ))}
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
