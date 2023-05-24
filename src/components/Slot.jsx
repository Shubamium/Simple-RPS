import React from 'react'
import styled from 'styled-components';


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
export default function Slot({data,onClick}) {
    if(data === null || data === undefined)return<></>;
    return (
        <StyledSlot onClick={()=>{onClick && onClick()}}>
            data:{data}
        </StyledSlot>
    )
}
