import styled from "styled-components";
import { bgColor } from "../../utility";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
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
    &:active{
        scale:0.92;
    }

`