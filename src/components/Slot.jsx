import React from 'react'
import styled, { css } from 'styled-components';
import rock from '../assets/RPS_stone.png';
import paper from '../assets/RPS_paper.png';
import scissors from '../assets/RPS_scissors.png';
import hidden from '../assets/RPS_hidden.png';
import { bgColor } from '../utility';

const RPS_STATE = {
    rock:0,
    paper:1,
    scissors:2,
    hidden:3
}

const RPS = [
    rock,
    paper,
    scissors,
    hidden
]


const StyledSlot = styled.div`

    background: ${props => bgColor[props.data]};
    ${props => props.data === RPS_STATE.hidden && css`
        & .icon{
            filter: invert(90%);
        }
    `}
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
export default function Slot({data,onClick}) {
    if(data === null || data === undefined)return<></>;
    return (
        <StyledSlot data={data} onClick={()=>{onClick && onClick()}}>
            <img src={RPS[data]} alt="" className='icon' />
        </StyledSlot>
    )
}
