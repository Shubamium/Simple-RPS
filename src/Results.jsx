import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { STATE_ROUND } from './utility';
import styled from 'styled-components';
import { StyledLayout } from './Home';


const StyledResults = styled(StyledLayout)`
    
    .main{
        
    }
`
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
            state:{bestof:matchResults.bestof,score:matchResults.gameScore,round:matchResults.round}
        });
    }

    function handleBack(){
        navigate('/');
    }
    return (
        <StyledResults>

            <header>
                <h2 className="roundcount">Game {matchResults.round}</h2>
                <h2><b>Simple</b> Rock Paper Scissors</h2>
            </header>
            <div className="main">
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

            <footer>
                <div className='credit'>
                    <div className='icon'></div>
                    <p>
                         website design by <a href="https://github.com/shubamium"><b>Shubamium</b></a>
                    </p>
                </div>
                <div className="highscore">
                    <h2>Highschore:</h2>
                    <p className='score'>20</p>
                </div>
            </footer>
        </StyledResults>
    )
}