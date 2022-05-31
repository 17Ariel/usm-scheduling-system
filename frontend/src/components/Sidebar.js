import React, { useRef } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import useFetch from "../hooks/useFetch";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Menulist from "./Menulist";

const Sidebar = ({ print }) => {
  const menu = useRef();
  const token = localStorage.getItem("token");
  const { data, loading, error } = useFetch(
    `http://localhost:8000/faculty/me`,
    token
  );
  const { firstname, lastname } = data;

  const username = `${lastname}, ${firstname}`;
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return console.log(error);
  }

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
    <>
      <div className="w-60 h-full fixed bg-secondary-0 flex flex-col gap-2 z-10">
        <div className="flex gap-4 justify-center items-center mt-6">
          <Menu action={menuAction} />
          <Link to="/profile">
            <PersonCircle className="text-6xl text-blue-500 cursor-pointer" />
          </Link>
        </div>
        <h1 className="text-center px-6 py-2 bg-warning-0">{username}</h1>
        <Menulist refs={menu} print={print} />
      </div>
    </>
  );
};

export default Sidebar;
