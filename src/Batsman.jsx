import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState (0);

    const handleSingle = () => {
        let newRuns = runs + 1;
        setRuns (newRuns);
    } 
    const handleSix = () => {
        const newRuns = runs + 6;
        setRuns (newRuns);
    } 
    return (
        <div>
            <h3>Player : Bangladeshi Batsman</h3>
            {runs > 50 && <p>Your Score : {runs}</p>}
            <h1>Score : {runs}</h1>
            <button onClick= {handleSingle}>One</button>
            <button onClick = {() => setRuns (runs + 4)}>Four</button>
            <button onClick = {handleSix}>Six</button>
        </div>
    )
}