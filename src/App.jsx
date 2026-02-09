import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import {CartContext} from "./contexts.jsx";


const App = () => {
  return (
    <CartContext.Provider value={[[], function() {}]}>
    <div>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </div>
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);