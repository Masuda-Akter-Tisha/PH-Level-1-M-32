import { useState } from "react"

export default function ShowHide () {
    const [num, setNum] = useState (0);
    return (
        <div>
            <h3>num is = {num}</h3>
            {
                num >= 50 && <h3>Hello! React Learner</h3>
            }
            <button onClick={() => {setNum (num + 10)}}>Click me!</button>
        </div>
    )
}