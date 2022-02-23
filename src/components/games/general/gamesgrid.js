import React from "react";
import './general.css';
import { images } from '../../../helpers/carousel_images_array'

const GamesGrid= () => {
import { useNavigate } from "react-router-dom";

const GamesGrid= () => {
  const navigate = useNavigate();

  const navigateToGame = (index) => {
    navigate(images[index].gameUrl);
  }
    return (
       <div className='image_container'>
           {images.map((item,i)=>{
               return (
                  <div onClick={() => navigateToGame(i)} className='image_item'  key={i} >
                    <div style={{ backgroundImage: `url(${item.img})` }} />
                    <span>{item.title}</span>
                    </div>
               )
           })}
       </div>
    )
}
export default GamesGrid

