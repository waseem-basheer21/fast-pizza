import Pizza from "./Pizza";
import { pizzaData } from "../../public/data";
export default function Menu() {
  const pizzas = pizzaData;
  //   const numLength = pizzas.length
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Sorry, we are out of stock</p>
      )}
    </main>
  );
}
