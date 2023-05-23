import Slot from "./components/slot";

export default function Game() {
    return (
        <div>
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
