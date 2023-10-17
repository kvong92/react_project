import React, { useEffect, useState } from "react";
import '../assets/css/counter.css';

function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (count === 5) {
            alert("You've reached 5!")
        }
    }
    , [count]);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>React Counter</h1>
            <h2>{count}</h2>
            <div className="container">
                <button className="control__btn" onClick={increment}>+</button>
                <button className="control__btn" onClick={decrement}>-</button>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
        </>
    )   
}

export default Counter;