import React from "react";
import '../css/home.css';
import GameCard from "./GameCard";
import hangman from '../images/hangman.png'
import tic from '../images/tictactoe.png'
import word from '../images/wordsearch.png'

const Home = () => {
    return(
        <div className="home-main">
            <h1 className="player-title">Welcome, Player</h1> 
            <h3 className="choice-title">Choose a Game</h3>

            <div className="game-cards">

            <GameCard title="Hangman" img={hangman} />
            <GameCard title="Tic-Tac-Toe" img={tic} />
            <GameCard title="Word Search" img={word} />
            </div>
        </div>
    )
}

export default Home;