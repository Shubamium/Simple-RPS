import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const bestOfRef = useRef();
    const startGame = (e)=>{
        navigate('',{state:{bestof:bestOfRef.current.value || 3}});
    }
    return (
        <div>
            <h2>Simple RPS</h2>
            <form onSubmit={startGame}>
                <label htmlFor="bestof">Best Of:</label>
                <input type="number" name="bestof" id="bestof" />
                <button type="submit">Start</button>
            </form>
            <h2>Highschore:</h2>
            <p>20</p>
        </div>
    )
}
