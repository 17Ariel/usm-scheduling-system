import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
// import useFind from "../hooks/useFind";

const Viewschedule = ({ refs }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const { data, loading, error } = useFetch(
    "http://localhost:8000/schedule/my",
    user
  );

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
    <div className="flex flex-col gap-8 justify-center items-center mt-5 w-full">
      <h1 className="text-3xl font-bold">Examination Schedule</h1>
      <div className="bg-silver-0 px-4 py-2 border-t-8 rounded-t-md border-t-danger-0 ">
        {/* <h1>{new Date(createdAt).toLocaleString("en-PH")}</h1> */}
        <table className="text-lg" ref={refs}>
          <thead className="uppercase bg-tertiary-0 text-left">
            <tr>
              <th scope="col" className="px-20 py-8 border border-danger-0">
                Time
              </th>
              <th scope="col" className="px-20 py-8 border border-danger-0">
                Proctor
              </th>
              <th scope="col" className="px-20 py-8 border border-danger-0">
                Room
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((sched) => (
              <tr
                className="odd:bg-custom-0 even:bg-white text-left:"
                key={sched._id}
              >
                <td className="px-20 py-8 border border-danger-0">
                  {sched.time}
                </td>
                <td className="px-20 py-8 border border-danger-0">
                  {sched.proctor}
                </td>
                <td className="px-20 py-8 border border-danger-0">
                  {sched.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewschedule;
