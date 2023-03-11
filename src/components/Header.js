import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header>
        <section>
          <h1 class="title">
            Portfolio <br></br>Christopher Doolhoff
          </h1>
          <Navigation />
        </section>
      </header>
    </>
  );
}
