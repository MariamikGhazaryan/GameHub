import React, { useState, useEffect } from 'react';
import { cardImgs } from './helper';
import './match.css';
import SingleCard from './singleCard';

const MatchGame = () => {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choozenOne, setChoozenOne] = useState(null)
    const [choozenTwo, setChoozenTwo] = useState(null)
   

    const shuffleCards = () => {
        const shuffledCards = [...cardImgs, ...cardImgs]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }
    
    const handleChoice = (card) => {
        choozenOne ? setChoozenTwo(card) : setChoozenOne(card)
    }

    const reset = () => {
        setChoozenOne(null)
        setChoozenTwo(null)
        setTurns(prev => prev + 1)
    }

    useEffect(() => {
        if(choozenOne && choozenTwo) {
            if(choozenOne.src === choozenTwo.src) {
                setCards(prev =>{
                    return prev.map(card =>{
                        if(card.src === choozenOne.src){
                            return {...card, matched:true}
                        } else{
                            return card
                        }
                    })
                })
                reset()
            } else {
                setTimeout(() =>reset(),1000)
            }
        }

    },[choozenOne,choozenTwo])

    useEffect(() => {
        shuffleCards()
    },[])
     
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
                       flipped= {card === choozenOne || card === choozenTwo || card.matched}
                       />
                    ))
                }
            </div>
            <p>Turns : {turns}</p>
        </div>
    )
}
export default MatchGame
