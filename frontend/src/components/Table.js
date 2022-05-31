import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <table className="text-lg">
        <thead className="uppercase bg-tertiary-0 text-left">
          <tr>
            <th scope="col" className="px-20 py-8 border border-danger-0">
              Time
            </th>
            <th scope="col" className="px-20 py-8 border border-danger-0">
              Proctor
            </th>
            <th scope="cl" className="px-20 py-8 border border-danger-0">
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
    </>
  );
};

export default Table;
