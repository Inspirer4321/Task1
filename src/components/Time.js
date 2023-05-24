import React from "react"
function Time () {
    const [number, setNumber] = React.useState(4);
  
    const handleClick = () => {
      setNumber(number + 1);
    };
  
    return(
        <div className="time">
            
            <button onClick={handleClick}>Click me</button>
            <p>I have been toggled {number} times</p>
        </div>
    )
}

export default Time;