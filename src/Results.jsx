import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { STATE_ROUND } from './utility';

export default function Results() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {matchResults} = state;

    if(!matchResults){
        navigate('/');
        return<></>;
    }

    function handleNextRound(){
        navigate('/game',{
            state:{bestof:matchResults.bestof,score:matchResults.gameScore}
        });
    }

    function handleBack(){
        navigate('/');
    }
    return (
        <div>
            <h2>{matchResults.isFinal ?
            "Final Round" : 'Round Ended' 
            }</h2>
            <p>Results:{STATE_ROUND[matchResults.roundStatus]}</p>
            <p className="game-score">{matchResults.gameScore.player} - {matchResults.gameScore.cpu}</p>
            {!matchResults.isOver && 
                <button onClick={()=>{handleNextRound()}}>Next Round</button>
            }
            <button onClick={handleBack}>Go Back</button>
        </div>
    )
}