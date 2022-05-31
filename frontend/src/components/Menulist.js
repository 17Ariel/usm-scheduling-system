import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Menulist = ({ refs, print }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("islogin");
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      {location.pathname === "/dashboard" ||
      location.pathname === "/profile" ||
      location.pathname === "/schedule" ? (
        <>
          <div className="hidden flex-col gap-4" ref={refs}>
            <h1 className="bg-primary-0 text-white px-8 py-2 text-center uppercase text-xl">
              My Schedule
            </h1>
            <ul className="flex flex-col gap-4 text-right">
              <Link
                to="/schedule"
                className="bg-greenish-0 text-white px-4 py-2"
              >
                View Schedule
              </Link>
              {location.pathname === "/schedule" ? (
                <>
                  <button
                    className="bg-greenish-0 text-white px-4 py-2 text-right"
                    onClick={print}
                  >
                    Print Schedule
                  </button>
                </>
              ) : (
                ""
              )}
              <button
                className="bg-greenish-0 text-white px-4 py-2 text-right"
                onClick={logout}
              >
                Logout
              </button>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="hidden flex-col gap-4 mt-12" ref={refs}>
            <ul className="flex flex-col gap-4 text-center">
              <Link
                to="/admin/add"
                className="bg-greenish-0 text-white px-4 py-2"
              >
                Add Schedule
              </Link>
              <button
                className="bg-greenish-0 text-white px-4 py-2 text-center"
                onClick={logout}
              >
                Logout
              </button>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Menulist;
