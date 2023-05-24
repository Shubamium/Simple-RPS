import React from 'react'
import styled from 'styled-components';
import rock from '../assets/RPS_stone.png';
import paper from '../assets/RPS_paper.png';
import scissors from '../assets/RPS_scissors.png';
import hidden from '../assets/RPS_hidden.png';

const StyledSlot = styled.div`
    background: red;
    margin: 1em;
    width: 150px;
    aspect-ratio: 1/1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
        scale: 1.02;
    }
`

const RPS = [
    rock,
    paper,
    scissors,
    hidden
]
export default function Slot({data,onClick}) {
    if(data === null || data === undefined)return<></>;
    return (
        <StyledSlot onClick={()=>{onClick && onClick()}}>
            {/* data:{data} */}
            <img src={RPS[data]} alt="" />
        </StyledSlot>
    )
}
