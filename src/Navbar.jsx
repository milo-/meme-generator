import React from "react";
import trollface from "./assets/troll-face.png";

export default function NavBar() {
  return (
    <div className="nav--style">
      {" "}
      <img src={trollface} className="logo" alt="Vite logo" />
    </div>
  );
}
