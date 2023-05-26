import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { STATE_ROUND, bgColor } from './utility';
import styled from 'styled-components';
import { StyledLayout } from './Home';
import { StyledButton } from './components/styled/StyledButton';
import { motion } from 'framer-motion'
import useHighscore from './components/hooks/useHighscore';

const StyledResults = styled(StyledLayout)`
    
    .main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width:60vw;

        .left{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 4em;
            .title-results{
                font-size:8rem;
                line-height:80%;
                font-weight: 600;
                color:grey;
                letter-spacing: -12px;
                span{
                    font-weight:400;
                    color:black;
                }
            }

            .action{
                display:flex;
                gap:2em;
                button{
                    color:white;
                    font-size: 1.7rem;
                }
                padding-left:.9em;
            }
        }

        .right{
            display:flex;
            justify-content: center;
            align-items: end;
            flex-direction: column;
            .result-text{
                span{
                    font-weight:bold;
                }
            }
            .score{
                font-size: 4rem;
                font-weight: bold;
                background:#B6FEA4;
                padding:0em .9em;
                color:#444343;
            }
        }
    }


    footer{
        .abstract{
            display: flex;
            gap: 2em;
            div{
                width:50px;
                height:50px;
            }
            .box:nth-child(1){
                background-color: ${props => bgColor[0]};
            }
            .box:nth-child(2){
                background-color: ${props => bgColor[1]};
            }
            .box:nth-child(3){
                background-color: ${props => bgColor[2]};
            }
        }
    }
`

const scoreAnimation = {
    initial:{
        scale:0,
        rotate:-20
    },
    animate:{
        scale:1,
        rotate:0
    }
}
export default function Results() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const {matchResults} = state;

    if(!matchResults){
        navigate('/');
        return<></>;
    }

    function handleNextRound(){
        navigate('/game',{
            state:{bestof:matchResults.bestof,score:matchResults.gameScore,round:matchResults.round}
        });
    }

    function handleBack(){
        navigate('/');
    }
    const {highscore} = useHighscore();

    return (
        <StyledResults initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}}>
            <motion.header initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{delay:0.2,ease:'linear'}}>
                <h2 className="roundcount">Game {matchResults.round}</h2>
                <h2><b>Simple</b> Rock Paper Scissors</h2>
            </motion.header>
            <div className="main">
               <div className="left">
                    {!matchResults.isOver ?
                    <h1 className='title-results'>Round <br/><span>
                        {matchResults.isFinal ?
                        'FINAL': 'ENDED' 
                        }
                    </span>
                    </h1>
                    :
                        <h1 className='title-results'>
                            Game <br/>
                            <span>OVER</span>
                        </h1>
                    }
                    <div className="action">
                        {!matchResults.isOver && 
                            <StyledButton bgColor={1} onClick={()=>{handleNextRound()}}>Next Round</StyledButton>
                        }
                        <StyledButton  bgColor={0} onClick={handleBack}>Go Back</StyledButton>
                    </div>
               </div>
                <div className="right">
                    <p className='result-text'>Results: <span>{STATE_ROUND[matchResults.roundStatus]}</span></p>
                    <motion.p  initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} className="score"> {matchResults.gameScore.player} - {matchResults.gameScore.cpu}</motion.p>
                </div>
            </div>

            <footer>
                <div className="highscore">
                    <h2>Highschore:</h2>
                    <p className='score'>{highscore}</p>
                </div>
                <div className='abstract'>
                  <motion.div  whileHover={{rotate:135,animationDelay:0}} initial={{opacity:0,rotate:-90}} animate={{opacity:1,rotate:0}} transition={{delay:0.2}} className='box 1'></motion.div>
                  <motion.div whileHover={{rotate:135,animationDelay:0}} initial={{opacity:0,rotate:-90}} animate={{opacity:1,rotate:0}} transition={{delay:0.3}} className='box 2'></motion.div>
                  <motion.div whileHover={{rotate:135,animationDelay:0}} initial={{opacity:0,rotate:-90}} animate={{opacity:1,rotate:0}} transition={{delay:0.4}} className='box 3'></motion.div>
                </div>
            </footer>
        </StyledResults>
    )
}