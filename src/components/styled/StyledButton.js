import styled from "styled-components";
import { bgColor } from "../../utility";

export const StyledButton = styled.button`
    background: ${props => (props.bgColor && bgColor[props.bgColor]) || bgColor[0]};
    padding: .2em 1em;
    font-weight: bold;
    font-size:1.2rem;
    font-family: var(--fontMain);
    border: none;
    cursor: pointer;
    &:hover{
        scale: 1.02;
    }

`
