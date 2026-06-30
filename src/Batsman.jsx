import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState (0);
    const [six, setSix] = useState (0);

    const handleSingle = () => {
        let updateRuns = runs + 1;
        setRuns (updateRuns);
    } 
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSix = six + 1;
        setSix (updateSix);
        setRuns (updateRuns);
    } 
    return (
        <div>
            <h3>Player : Bangladeshi Batsman</h3>
            <p><small>Six : {six}</small></p>
            {runs > 50 && <p>Your Score : {runs}</p>}
            <h1>Score : {runs}</h1>
            <button onClick= {handleSingle}>One</button>
            <button onClick = {() => setRuns (runs + 4)}>Four</button>
            <button onClick = {handleSix}>Six</button>
        </div>
    )
}