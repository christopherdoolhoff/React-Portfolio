import React from "react";
import resume from "../assets/images/Christopher Doolhoff Resume.pdf";

export default function Resume() {
  return (
    <div id="info">
        <h3>Resume:</h3>
        <a href={resume} target="_blank">
          Link to Christopher Doolhoff's Resume
        </a>
    </div>
  );
}
