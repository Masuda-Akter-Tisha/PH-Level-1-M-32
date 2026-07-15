import { useState } from "react"

export default function Count () {
    const [count, setCount] = useState (0);
    const handleIncreaseBtn = () => {
        const increase = count + 1;
        setCount (increase);
    }
    const handleDecreaseBtn = () => {
        const decrease = count - 1;
        setCount (decrease);
    }
    return (
        <div>
            <h3>Your count is : {count}</h3>
            <button onClick= {handleIncreaseBtn}>Increase</button> <br/>
            <button onClick = {handleDecreaseBtn}>Decrease</button> <br/>
            <button onClick={() => {setCount (0)}}>Reset</button>
        </div>
    )
}