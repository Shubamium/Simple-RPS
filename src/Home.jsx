import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { StyledButton } from './components/styled/StyledButton';

const StyledHome = styled.main`
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
    }

    .main{
        display: grid;
        width: 60vw;
        gap: 2em;
        grid-template-columns: 1fr 1fr;
        .decor{
            width: 100%;
            height: 100%;
            background-color: #FF7676;

        }

        .action{
            .main-title{
                font-size: 8rem;
                text-transform: uppercase;
                line-height: 80%;
            }
            .game-start_form{
                padding: .9em;
                label{
                    font-weight: 200;
                }
                input{
                    outline: none;
                    border: none;
                    background: #EFEFEF;
                    font-size: 1.2rem;
                    padding: .21em;
                    max-width: 20%;
                    color: #7d7d7d;
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
        <StyledHome>
            <header>
                <div></div>
                <h2><b>Simple</b> Rock Paper Scissors</h2>
            </header>
            <div className="main">
                <div className="action">
                    <h1 className='main-title'>Simple <br/> RPS</h1>
                    <form onSubmit={startGame} className='game-start_form'>
                        <label htmlFor="bestof">Best Of:</label>
                        <div className='input'>
                            <input type="number" ref={bestOfRef} name="bestof" id="bestof" />
                            <StyledButton type="submit">Start</StyledButton>
                        </div>
                    </form>
                </div>
                <div className="decor">

                </div>
            </div>
            <footer>
                <div className='credit'>
                    <div className='icon'></div>
                    <a href="">website design by <b>Shubamium</b></a>
                </div>
                <div className="highscore">
                    <h2>Highschore:</h2>
                    <p>20</p>
                </div>
            </footer>
        </StyledHome>
    )
}
