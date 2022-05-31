import React, { useRef } from "react";
import Menulist from "./Menulist";
import Menu from "./Menu";

const AdminSidebar = () => {
  const menu = useRef();

  const menuAction = () => {
    if (menu.current.classList.contains("hidden")) {
      menu.current.classList.remove("hidden");
      menu.current.classList.add("flex");
    } else {
      menu.current.classList.remove("flex");
      menu.current.classList.add("hidden");
    }
  };
  return (
    <div className="w-60 h-full fixed bg-secondary-0 flex flex-col gap-2">
      <div className="flex gap-4 justify-center items-center mt-6">
        <Menu action={menuAction} />
      </div>
      {/* <h1 className="text-center px-6 py-2 bg-warning-0">{username}</h1> */}
      <Menulist refs={menu} />
    </div>
  );
};

export default AdminSidebar;
