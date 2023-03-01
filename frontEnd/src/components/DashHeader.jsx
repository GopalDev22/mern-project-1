import React from "react";
import { Link } from "react-router-dom";
const DashHeader = () => {
  const content = (
    <header className="">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl font-bold text-center text-[#3dca3d] m-3">
            techNotes
          </h1>
        </Link>
        <nav className="">{/* add nav buttons later */}</nav>
      </div>
    </header>
  );

  return content;
};

export default DashHeader;
