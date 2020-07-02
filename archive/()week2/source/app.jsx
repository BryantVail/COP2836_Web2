const continents = ["africa", "america", "australia", "europe"];
const helloContinents = Array.from(continents, (conts) => `Hello ${conts}!`);
const message = helloContinents.join(" ");

const element = (
  <div title="Outer div">
    <h1>Hello World</h1>
  </div>
);

ReactDOM.render(element, document.querySelector("#contents"));
