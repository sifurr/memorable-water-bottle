import { useEffect } from "react";
import { useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = bottle =>{
    console.log("bottle had been added");
    console.log(bottle);
  }
  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
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
