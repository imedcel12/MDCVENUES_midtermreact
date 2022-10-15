import React, { useState } from "react";
import { FaTh, FaBars, FaPen, FaSchool} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const dashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/library",
      name: "Library",
      icon: <FaSchool />,
    },
    {
      path: "/exam",
      name: "Exam",
      icon: <FaPen />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="dashboard mt-5">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo font-link"> <img src="images/mdc.png" alt="" width="30px" height="30px" position="center" />
            MDC
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeclassname="active" end>
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text"> {item.name} </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default dashboard;