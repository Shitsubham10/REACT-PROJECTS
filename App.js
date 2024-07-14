import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App = () => {
   const[tours,setTours]=useState(data)

   function removeTour(id) {
    //ek new object banarhe h
     const newTours = tours.filter(tour=> tour.id !==id);
     setTours(newTours);
   } 
   if(tours.length ==0){
      return(
        <div className="refresh">
          <h2>no tours left</h2>
          <button className="buttonwhite"onClick={()=> setTours(data)}>
            Refresh
          </button>
        </div>
      );
   }
     return(
        <div className="app">
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>

     )
};

export default App;
