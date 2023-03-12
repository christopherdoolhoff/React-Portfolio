import React from "react";

export default function Header() {
  return (
    <div id="info">
      <ul>
        <li class="links">
          <h3>LinkedIn:</h3>{" "}
          <a
            href="https://www.linkedin.com/in/christopher-doolhoff-47776954/"
            target="_blank"
          >
            https://www.linkedin.com/in/christopher-doolhoff-47776954/
          </a>
        </li>
        <li class="links">
          <h3>GitHub:</h3>{" "}
          <a href="https://github.com/christopherdoolhoff" target="_blank">
            https://github.com/christopherdoolhoff
          </a>
        </li>
        <li class="links">
          <h3>Facebook:</h3>{" "}
          <a href="https://www.facebook.com/cdoolhoff" target="_blank">
            https://www.facebook.com/cdoolhoff
          </a>
        </li>
      </ul>
    </div>
  );
}
