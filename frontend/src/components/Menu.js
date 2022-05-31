import React from "react";

const Menu = ({ action }) => {
  return (
    <>
      <div className="flex flex-col gap-2 cursor-pointer" onClick={action}>
        <div className=" bg-grey-0 h-3 w-14 border border-gray-800"></div>
        <div className=" bg-grey-0 h-3 w-14 border border-gray-800"></div>
        <div className=" bg-grey-0 h-3 w-14 border border-gray-800"></div>
      </div>
    </>
  );
};

export default Menu;
