import { useLocation } from "react-router-dom";
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
    const {bestof} = state;

    const [currentRound,setCurrentRound] = useState([]); // Reset to empty array
    const [visibleCPU,setVisibleCPU] = useState(3);  // Reset to 3
    const [gameScore,setGameScore] = useState({player:0,cpu:0});
   
    const [matchResults,setMatchResults] = useState(null);
    const [round,setRound] = useState(0);
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
        setVisibleCPU(currentRound[0]);
        const win =  checkWin(currentRound[0], currentRound[1]);
        const _matchResults = {
            roundStatus:win,
            isFinal:false,
            gameScore:gameScore,

        }
        const onDelayFinished = ()=>{
            console.log('Round Ended');
            setMatchResults(_matchResults);
        }
        // Add a delay
        setTimeout(()=>{
            onDelayFinished();
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
            <h2>Enemy</h2>
            <Slot data={visibleCPU}/>
            <p>status</p>


            {matchResults && 
            <dialog open >
                <h2>Round Ended</h2>
                <p>Results:{STATE_ROUND[matchResults.roundStatus]}</p>
                <p className="game-score">{matchResults.gameScore.player} - {matchResults.gameScore.cpu}</p>
                <button onClick={()=>{handleNextRound()}}>Next Round</button>
                <button>Go Back</button>
            </dialog>
            }
        </div>
    )
}
