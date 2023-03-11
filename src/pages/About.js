import React from "react";
import profileImg from "../assets/images/profileimg.png"

export default function About() {
  return (
    <>
    <img src={profileImg} alt="picture of Christopher Doolhoff" />
    <div id="aboutme">
        <h4>About Me</h4>
        <p>Christopher Doolhoff is a business and logistics manger who specializes in the ability to strategize and take
            businesses to the next level in growth and profitability. He has spent the last 14 years helping the
            California and Florida plants, of Thatcher Chemical, facilitate business growth. He has also helped improve
            the overall performance of the New York location. Christopher has always had a passion for problem solving.
            This passion led him to getting a bachelor’s degree in Supply Chain Management from Weber State University
            in 2009. This then led him to completing a University of Central Florida Coding Bootcamp for Full Stack Web
            Development in 2023. He lives in Deland, Florida with his wife and kids. </p>
    </div>
    </>
  );
}
