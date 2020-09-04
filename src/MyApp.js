import React from "react";

function MyApp() {
  const date = new Date();
  const hours = date.getHours();
  let time;

  if (time >= 6 && time <= 10) {
    time = "morning";
  } else if (time > 10 && time <= 17) {
    time = "afternoon";
  } else {
    time = "night";
  }

  return (
    <main>
      <h1>Introduce</h1>
      <h2>The new Product</h2>
      <p>
        I would Like to reccomend you something awesome to learn new framework{" "}
        <span>in this {time}</span> but, yea! it's not free. I need your support
        to follow my <a href="https://twitter.com/nisacodelifings">twitter</a>{" "}
        before.
      </p>
    </main>
  );
}

export default MyApp;
