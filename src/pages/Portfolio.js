import React from "react";
import passwordGenerator from "../assets/images/passwordGeneratorScreenshot.png";
import codeQuiz from "../assets/images/code-quiz.png";
import workDayScheduler from "../assets/images/workDayScheduler.png";
import mediaSearch from "../assets/images/Media Search Screenshot.png";
import hubl from "../assets/images/HUBL Screenshot.png";
import noteTaker from "../assets/images/NoteTaker.png";

export default function Portfolio() {
  return (
    <main>
      <div id="applications">
        <div class="dropdown">
          <button class="dropbtn">
            <a href="#applications">Applications:▼</a>
          </button>
          <div class="dropdown-content">
            <a href="#passwordGenerator">Password Generator</a>
            <a href="#codeQuiz">Code Quiz</a>
            <a href="#workDayScheduler">Work Day Scheduler</a>
            <a href="#MediaSearch">Media Search</a>
            <a href="#HUBL">HUBL</a>
            <a href="#noteTaker">Note Taker</a>
          </div>
        </div>
        <div class="card">
          <div id="passwordGenerator">
            <h5>
              Password Generator{" "}
              <a
                href="https://github.com/christopherdoolhoff/module-3-challenge"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a
              href="https://christopherdoolhoff.github.io/module-3-challenge/"
              target="_blank"
            >
              <img
                src={passwordGenerator}
                alt="screenshot of password Generator website"
              />
            </a>
          </div>
          <div id="codeQuiz">
            <h5>
              Code Quiz{" "}
              <a
                href="https://github.com/christopherdoolhoff/code-quiz"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a
              href="https://christopherdoolhoff.github.io/code-quiz/"
              target="_blank"
            >
              <img src={codeQuiz} alt="screenshot of code quiz website" />
            </a>
          </div>
          <div id="workDayScheduler">
            <h5>
              Work Day Scheduler{" "}
              <a
                href="https://github.com/christopherdoolhoff/work-day-scheduler"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a
              href="https://christopherdoolhoff.github.io/work-day-scheduler/"
              target="_blank"
            >
              <img
                src={workDayScheduler}
                alt="screenshot of workDayScheduler"
              />
            </a>
          </div>
          <div id="MediaSearch">
            <h5>
              Media Search{" "}
              <a
                href="https://github.com/christopherdoolhoff/Media-search"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a href="https://ale-miret.github.io/Media-search/" target="_blank">
              <img
                class="img"
                src={mediaSearch}
                alt="screenshot of Media Search application"
              />
            </a>
          </div>
          <div id="HUBL">
            <h5>
              HUBL{" "}
              <a
                href="https://github.com/christopherdoolhoff/PROJECT-2"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a
              href="https://pacific-brook-72214.herokuapp.com/"
              target="_blank"
            >
              <img
                class="img"
                src={hubl}
                alt="screenshot of HUBL application"
              />
            </a>
          </div>
          <div id="noteTaker">
            <h5>
              Note Taker{" "}
              <a
                href="https://github.com/christopherdoolhoff/Note-Taker"
                target="_blank"
              >
                GitHub
              </a>
            </h5>
            <a
              href="https://salty-brushlands-25601.herokuapp.com/notes"
              target="_blank"
            >
              <img
                class="img"
                src={noteTaker}
                alt="screenshot of Note Taker application"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
