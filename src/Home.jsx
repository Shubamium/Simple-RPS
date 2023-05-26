import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { StyledButton } from './components/styled/StyledButton';
import { motion } from 'framer-motion';

export const StyledLayout = styled(motion.main)`
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height:100vh;
    width: 100vw;
    header{
        display: flex;
        justify-content: space-between;
        width: 100%;
        h2{
            font-weight: 200;
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        .credit{
            .icon{
                width: 20px;
                height: 20px;
                background-color: #7d7d7d;
            }
            a{
                color: black;
            }
        }
    }

`
const StyledHome = styled(StyledLayout)`
    footer{
        .highscore{
            text-align: right;
            h2{
                font-size:.9rem;
                font-weight: 400;
            }
            .score{
                margin: .2em 0;
                font-size: 1.4rem;
                padding: .2em 2em;
                background-color: #FF7676;
                font-weight: bold;
                color: white;
            }
        }
    }
    .main{
        display: grid;
        width: 60vw;
        gap: 200px;
        grid-template-columns: 1fr 1fr;
        .decor{
            width: 100%;
            height: 100%;
            background-color: #FF7676;

        }

        .action{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1em;
            .main-title{
                font-size: 8rem;
                text-transform: uppercase;
                line-height: 80%;
            }
            .game-start_form{
                padding: 0 .6em;
                label{
                    font-weight: 200;
                }
                input{
                    outline: none;
                    border: none;
                    background: #EFEFEF;
                    font-size: 1.2rem;
                    padding: .21em;
                    color: #555555;
                    width: 100%;

                    &::placeholder{
                        color: #c7c2c2;
                    }
                }

                .input{
                    display: flex;
                    gap:1em;
                    max-width: 50%;
                }
                
            }
        }
    }
`

export default function Home() {
    const navigate = useNavigate();
    const bestOfRef = useRef();
    const startGame = (e)=>{
        e.preventDefault();
        const data = {
            bestof:bestOfRef?.current?.value || 3
        }
        navigate('/game',{state:data});
    }
    return (
        <StyledHome initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} exit={{opacity:0}} >
            <motion.header initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} transition={{delay:.25}}>
                <div></div>
                <h2><b>Simple</b> Rock Paper Scissors</h2>
            </motion.header>
            <div className="main">
                <div className="action">
                    <motion.h1 initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{delay:.30}} className='main-title'>Simple <br/> RPS</motion.h1>
                    <form onSubmit={startGame} className='game-start_form'>
                        <label htmlFor="bestof">Best Of:</label>
                        <div className='input'>
                            <motion.input  initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{delay:.35}}   placeholder='3' type="number" min="0" max={100} ref={bestOfRef} name="bestof" id="bestof" />
                            <StyledButton whileHover={{scale:1.2}} initial={{opacity:0,x:-200}} animate={{opacity:1,x:0}} transition={{delay:.45}}  type="submit">Start</StyledButton>
                        </div>
                    </form>
                </div>
                <div className="decor">

                </div>
            </div>
            <footer>
                <div className='credit'>
                    <div className='icon'></div>
                    <p>
                        website design by <a href="https://github.com/shubamium"><b>Shubamium</b></a>
                    </p>
                </div>
                <div className="highscore">
                    <h2>Highschore:</h2>
                    <p className='score'>20</p>
                </div>
            </footer>
        </StyledHome>
    )
}
