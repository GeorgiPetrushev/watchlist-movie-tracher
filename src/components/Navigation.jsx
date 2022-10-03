import React from "react";
import { Link } from "react-router-dom";
import NavigationStyle from "./style/NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <div className="container-nav">
        <div>
          <Link to="/add-movie" className="add">
            +Add
          </Link>
        </div>
        <div className="container-right">
          <div>
            <Link to="/">WatchList</Link>
          </div>
          <div>
            <Link to="/watched">Watched</Link>
          </div>
        </div>
      </div>
    </NavigationStyle>
  );
};

export default Navigation;
