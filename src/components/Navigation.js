import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link isActive={() => window.location.pathname === "/"} to="/">
        About Me
      </Link>
      <Link
        isActive={() => window.location.pathname === "/portfolio"}
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        isActive={() => window.location.pathname === "/contact"}
        to="/contact"
      >
        Contact
      </Link>
      <Link
        isActive={() => window.location.pathname === "/resume"}
        to="/resume"
      >
        Resume
      </Link>
    </nav>
  );
}
