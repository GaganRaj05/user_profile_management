import React, { useState } from "react";
import MainCont from "./mainCont";

export default function SideBar() {
  const [selected, setSelected] = useState("home");

  const handleClick = (option) => {
    setSelected(option);
  };

  return (
    <div className="d-flex" >
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px", height: "auto", marginTop: ".5px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${selected === "home" ? "active" : "text-white"}`}
              onClick={() => handleClick("home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`nav-link ${selected === "create" ? "active" : "text-white"}`}
              onClick={() => handleClick("create")}
            >
              Create User
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content" style={{ flex: 1 }}>
        <MainCont selected={selected} />
      </div>
    </div>
  );
}
