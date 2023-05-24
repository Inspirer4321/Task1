import React from "react";
function Number() {
    const [number, setNumber] = React.useState(6);
  
    const handleClick = () => {
      setNumber(number + 1);
    };
  
    return (
      <div>
        
        <button onClick={handleClick}>Click me</button>
        <p>I have been toggled {number} times</p>
      </div>
    );
  }
  
  export default Number;