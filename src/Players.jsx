import { useEffect, useState } from "react"

export default function Players () {
    const [players, setPlayers] = useState ([]);

    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json ())
        .then (data => setPlayers (data))
        
    }, [])
    return (
        <div className="card3">
            <h3>Player: {players.length}</h3>
            <ol>
                 {
                players.map (player => <li>{player.name}</li>)
            }
            </ol>   
        </div>
    )
}