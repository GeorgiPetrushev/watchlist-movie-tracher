import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="container">
      {" "}
      <Link to="/">Logo</Link>
      <div className="container-right">
        <div>
          <Link to="/">WatchList</Link>
        </div>
        <div>
          <Link to="/watched">Watched</Link>
        </div>
        <div>
          <Link to="/add-movie">+Add</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
