import { useEffect } from "react";
import { useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/Bottle";
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    console.log("called the useEffect for the local storage", bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);

      const savedCart = [];
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
            savedCart.push(bottle);
        }
      }

      console.log('saved card', savedCart);
      setCart(savedCart);


    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <Cart cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
