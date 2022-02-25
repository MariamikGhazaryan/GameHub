import React, {useEffect, useState} from 'react';
import {cardImgs} from './helper';
import './match.css';
import SingleCard from './singleCard';
import {useSelector} from "react-redux";
import {userSelector} from "../../../redux/selectors";
import {addGameScore} from "../../../helpers/helper";

const MatchGame = () => {
    const {currentUser} = useSelector(userSelector);
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [chosenOne, setChosenOne] = useState(null);
    const [chosenTwo, setChosenTwo] = useState(null);
    const [score, setScore] = useState(10);

    const shuffleCards = () => {
        if (turns) {
            addGameScore(currentUser.id, 'Memory Game', score);
        }
        const shuffledCards = [...cardImgs, ...cardImgs]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
        setScore(10);
    };

    const handleChoice = (card) => {
        chosenOne ? setChosenTwo(card) : setChosenOne(card)
    };

    const reset = () => {
        setChosenOne(null);
        setChosenTwo(null);
        setTurns(prev => prev + 1);
    };

    useEffect(() => {
        if (chosenOne && chosenTwo) {
            if (chosenOne.src === chosenTwo.src) {
                setCards(prev => {
                    return prev.map(card => {
                        if (card.src === chosenOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                });
                reset();
            } else {
                setTimeout(() => reset(), 1000);
                setScore(prev => prev ? prev - 1 : 0);
            }
        }

    }, [chosenOne, chosenTwo]);

    useEffect(() => {
        shuffleCards()
    }, []);

    return (
        <div className='title'>
            <h1>MATCH GAME</h1>
            <button onClick={shuffleCards} className='btn'>New Game</button>
            <div className='card_grid'>
                {
                    cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === chosenOne || card === chosenTwo || card.matched}
                        />
                    ))
                }
            </div>
            <p>Turns : {turns}</p>
            <p>Score : {score}</p>
        </div>
    )
}
export default MatchGame
