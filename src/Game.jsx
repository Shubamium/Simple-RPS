import { useLocation } from "react-router-dom";
import Slot from "./components/slot";
import { useEffect } from "react";

export default function Game() {

    const {state} = useLocation();
    const {bestof} = state;
    useEffect(()=>{
        console.log('start game');
    },[]);
    return (
        <div>
            <p>Best Of:{bestof}</p>
            <h2>Player1</h2>
            <Slot data={0}/>
            <Slot data={1}/>
            <Slot data={2}/>
            <p>VS</p>
            <h2>Enemy</h2>
            <Slot data={2}/>
            <p>status</p>
        </div>
    )
}
