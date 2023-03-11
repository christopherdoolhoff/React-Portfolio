import React from "react";
import resume from "../assets/images/Christopher Doolhoff Resume.pdf";

export default function Resume() {
  return (
    <>
    <div id="info">
        <h3>Resume:</h3>
        <a href={resume} target="_blank">
          Link to Christopher Doolhoff's Resume
        </a>
    </div>
    <div id="proficiencies">
    <ul>
      <h2>Proficiencies</h2>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Terminal Commands</li>
      <li>DOM manipulation</li>
      <li>jQuery</li>
      <li>Bootstrap</li>
      <li>Consuming RESTful APIs</li>
      <li>Parsing JSON to extract meaningful data</li>
      <li>Using AJAX to update data on a website</li>
      <li>Creating a web page from scratch</li>
      <li>Writing Node.js server code to serve static web pages</li>
      <li>Querying data and answering questions from a MySQL database</li>
      <li>Utilizing NoSQL databases, such as MongoDB, as an alternative to MySQL</li>
      <li>Improving the performance of applications</li>
      <li>Converting traditional applications into progressive web applications (PWAs)</li>
      <li>Creating single-page applications with React</li>
    </ul>
    </div>
    </>
  );
}
