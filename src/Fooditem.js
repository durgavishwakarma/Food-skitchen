import React from 'react';
import './App.css';
import img1 from './image.jpg';
function Fooditem() {
  return (
    <>
      <div>
        <header className="App">
          Food's Kitchen
        </header>
      </div>
      <div className="container">
        <img src={img1} alt="" />
        <div> burger</div>
       <div>price-200</div>  
       <div>
        <button>
          +
        </button>
        <button>
          -
        </button>
       </div>
      </div>
      <div className="container1">
        <img src={img1} alt="" />
        <div> 
          food 
        </div>
<div> price-200</div>
<button>
          +
        </button>
        <button>
          -
        </button>
      </div>  
      <div className="container2">
    
      </div>
    </>
  );
}
export default Fooditem
