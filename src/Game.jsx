import { useLocation, useNavigate } from "react-router-dom";
import Slot from "./components/slot";
import { useEffect, useState } from "react";
import { ROUND_STATE, STATE_ROUND } from "./utility";




function checkWin(p1,cpu){
    if(p1 === cpu) return ROUND_STATE.draw;
    const getWinningNumber = (i) =>{
        return (i + 1)%3;
    }

    if(cpu === getWinningNumber(p1)){
        return ROUND_STATE.win;
    }

    return ROUND_STATE.lose;
}
export default function Game() {

    const {state} = useLocation();
    const navigate = useNavigate();
    const {bestof,score} = state;

    const [currentRound,setCurrentRound] = useState([]); // Reset to empty array
    const [visibleCPU,setVisibleCPU] = useState(3);  // Reset to 3
    const [gameScore,setGameScore] = useState(score || {player:0,cpu:0});
   
    // const [matchResults,setMatchResults] = useState(null);
    // const [round,setRound] = useState(0);
    // Pick for enemy
    useEffect(()=>{
        enemyPick();
    },[]);

    // If Player has turned
    useEffect(()=>{
        if(currentRound.length >=2){
            onPlayerPick();
        }
    },[currentRound]);


    function handleNextRound(){
        resetRound();
        enemyPick();
    }
    function resetRound(){
        setVisibleCPU(3); // Hide CPU
        setMatchResults(null); //Remove Results
        setCurrentRound([]); // Clear the turn
    }
    function onPlayerPick(){
        // Show CPU Visually
        setVisibleCPU(currentRound[0]);
        
        // Check Winner
        const roundResult =  checkWin(currentRound[0], currentRound[1]);
        
        // Set Score
        let _gameScore = gameScore;
        if(roundResult === ROUND_STATE.win){
            _gameScore.player +=1; 
        }else if(roundResult === ROUND_STATE.lose){
            _gameScore.cpu +=1; 
        }
        
        const isFinalRound = (player,cpu)=>{
            const beforeFinishCount = bestof - 1;
            return player === beforeFinishCount && cpu === beforeFinishCount;
        }

        const isGameOver = (player,cpu)=>{
            return player >= bestof || cpu >= bestof;
        }
        // Create result object
        const _matchResults = {
            roundStatus:roundResult,
            isFinal:isFinalRound(_gameScore.player,_gameScore.cpu),
            isOver:isGameOver(_gameScore.player,_gameScore.cpu),
            gameScore:_gameScore,
            bestof:bestof
        }
        
      
        // Add a delay
        setTimeout(()=>{
            navigate('/results',{state:{matchResults:_matchResults}});
        },1000);
    }

    function enemyPick(){
         pick(Math.floor(Math.random()*3),0);
    }

    function pick(number,index){
        if(currentRound.length >= 2) return;
        setCurrentRound((prev)=>{
            const arr = [...prev];
            if(index !== undefined || index !== null ){
                arr[index] = number;
            }else{
                arr.push(number);
            }
            return arr;
        })
    }

    
    return (
        <div>
            <p>Best Of:{bestof}</p>
            <p>Current Round:"{currentRound.toString()}"</p>
            <h2>Player1</h2>
            <div style={{display:'flex'}}>
                <Slot data={0} onClick={()=>{pick(0,1)}}/>
                <Slot data={1} onClick={()=>{pick(1,1)}}/>
                <Slot data={2} onClick={()=>{pick(2,1)}}/>
            </div>
            <p>VS</p>
            <h2>CPU</h2>
            <Slot data={visibleCPU}/>

            {/* {matchResults && 
            <dialog open >
                <h2>Round Ended</h2>
                <p>Results:{STATE_ROUND[matchResults.roundStatus]}</p>
                <p className="game-score">{matchResults.gameScore.player} - {matchResults.gameScore.cpu}</p>
                <button onClick={()=>{handleNextRound()}}>Next Round</button>
                <button>Go Back</button>
            </dialog> */}
        </div>
    )
}
