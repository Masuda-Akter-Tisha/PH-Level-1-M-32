import { useState } from "react"

export default function Counter () {
    const counterStyle = {
        border : '1px solid white',
        padding : '20px 100px', 
        fontSize : '20px',
        margin : '10px auto',
        borderRadius : '10px'
    }

      const [count, setCount] = useState (0);

      const handleAdd = () => {
        // setCount (10);
        let newCount = count + 1;
        setCount (newCount);
      }

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

// function useState (initialValue) {
//     let sate = initialValue;
//     function setSate (newValue) {
//         state = newValue;
//     }
//     return [sate, setSate];
// }