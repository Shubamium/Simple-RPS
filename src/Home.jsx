import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const bestOfRef = useRef();
    const startGame = (e)=>{
        e.preventDefault();
        const data = {
            bestof:bestOfRef?.current?.value || 3
        }
        navigate('/game',{state:data});
    }
    return (
        <div>
            <h2>Simple RPS</h2>
            <form onSubmit={startGame}>
                <label htmlFor="bestof">Best Of:</label>
                <input type="number" ref={bestOfRef} name="bestof" id="bestof" />
                <button type="submit">Start</button>
            </form>
            <h2>Highschore:</h2>
            <p>20</p>
        </div>
    )
}
