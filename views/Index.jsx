const React = require("react");
function Index(props) {
  const { fruits } = props;
  console.log(fruits);
  return (
    <div>
      <h1>Fruits Index Page</h1>
      <ul>
        {fruits.map((fruit, i) => {
          return (
            <li>
              The <a href={`/fruits/${i}`}>{fruit.name}</a>
              is {fruit.color}{" "}
              {fruit.readyToEat 
              ? "Its ready to eat" 
              : "Its not ready to eat"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
