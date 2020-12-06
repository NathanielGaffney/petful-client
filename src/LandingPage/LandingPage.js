import { Link } from "react-router-dom";
import React from "react";

import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div className="LandingPage">
      <p>
        Hello, and welcome to petful! We are an unusual adoption agency in that
        we only have cats and dogs,and you can only adopt the one that has been here longest! That way we
        ensure every pet finds a home. Take a look at what we have to offer!
      </p>
      <img
        src="https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="cute dog"
      />
      <Link to={"/adopt"}>
        <button>Yes!</button>
      </Link>
    </div>
  );
}