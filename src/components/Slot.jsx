import React from 'react'
import styled, { css } from 'styled-components';
import rock from '../assets/RPS_stone.png';
import paper from '../assets/RPS_paper.png';
import scissors from '../assets/RPS_scissors.png';
import hidden from '../assets/RPS_hidden.png';
import { bgColor } from '../utility';
import { AnimatePresence, motion } from 'framer-motion';

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


const StyledSlot = styled(motion.div)`

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
export default function Slot({data,onClick,delay}) {
    if(data === null || data === undefined)return<></>;
    return (
        <StyledSlot data={data} whileTap={{rotate:135,animationDelay:0}} onClick={()=>{onClick && onClick()}} initial={{opacity:0,rotate:-90}} animate={{opacity:1,rotate:0}} transition={{delay:delay}}>
           <AnimatePresence mode='wait'>
              <motion.img key={RPS[data]} initial={{opacity:0}} animate={{opacity:1}} exit={{scale:0.9,x:-10,opacity:0}} src={RPS[data]} alt="" className='icon' />
           </AnimatePresence>
        </StyledSlot>
    )
}
