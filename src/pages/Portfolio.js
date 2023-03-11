import React from "react";
import prework from "../assets/images/prework study guide screenshot.png";
import challenge1 from "../assets/images/challenge 1 screenshot.png";
import challenge2 from "../assets/images/challenge 2 screenshot.png";
import mediaSearch from "../assets/images/Media Search Screenshot.png";
import hubl from "../assets/images/HUBL Screenshot.png"

export default function Portfolio() {
  return (
    <main>
        <div id="applications">
            <h4>Applications</h4>
            <div class="card">
                <div id="prework">
                    <h5>Bootcamp Prework Project</h5>
                    <a href="https://christopherdoolhoff.github.io/prework-study-guide/" target="_blank">
                        <img src={prework} alt="screenshot of prework website" />
                    </a>
                </div>
                <div id="challenge1">
                    <h5>Bootcamp Challenge 1</h5>
                    <a href="https://christopherdoolhoff.github.io/module-1-challenge/" target="_blank">
                        <img src={challenge1} alt="screenshot of challenge 1 website" />
                    </a>
                </div>
                <div id="challenge2">
                    <h5>Bootcamp Challenge 2</h5>
                    <a href="https://christopherdoolhoff.github.io/module-2-challenge/" target="_blank">
                        <img src={challenge2} alt="screenshot of challenge 2 website" />
                    </a>
                </div>
                <div id="MediaSearch">
                    <h5>Media Search</h5>
                    <a href="https://ale-miret.github.io/Media-search/" target="_blank">
                    <img class="img" src={mediaSearch} alt="screenshot of Media Search application" />
                    </a>
                </div>
                <div id="HUBL">
                    <h5>HUBL</h5>
                    <a href="https://pacific-brook-72214.herokuapp.com/" target="_blank">
                        <img class="img" src={hubl} alt="screenshot of HUBL application" />
                        </a>
                </div>
            </div>
        </div>
    </main>
  );
}
