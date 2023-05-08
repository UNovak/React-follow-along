import React from "react";

function getTitle(title) {
  return title;
}

const random_nums = [];
random_nums.length = 10;

for (var i = 0; i < 11; i++) {
  random_nums[i] = Math.floor(Math.random() * random_nums.length);
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <div>
        {random_nums.map((n) => (
          <p>{n}</p>
        ))}
      </div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}

export default App;
