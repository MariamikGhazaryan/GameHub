import React from 'react';
import './match.css';
import coverPhoto from './match_img/coverPhoto.png';


const SingleCard = ({ card,handleChoice,flipped,disabled }) => {
    const handleClick = () => {
            handleChoice(card)
    }
    return (
        <div className='singleCard'>
            <div className = {flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt='front_card' />
                <img className='cover' 
                src={coverPhoto} 
                onClick={handleClick} 
                alt='cover_photo' 
                />
            </div>
        </div>
    )

}
export default SingleCard