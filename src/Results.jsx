import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Results() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {matchResults} = state;

    if(!matchResults){
        navigate('/');
        return<></>;
    }
    return (
        <div>
            <h2>Round Ended</h2>
            <p>Results:{STATE_ROUND[matchResults.roundStatus]}</p>
            <p className="game-score">{matchResults.gameScore.player} - {matchResults.gameScore.cpu}</p>
            <button onClick={()=>{handleNextRound()}}>Next Round</button>
            <button>Go Back</button>
        </div>
    )
}
