import React from "react";
import './general.css';
import { images } from '../../../helpers/carousel_images_array'


const GamesGrid= () => {
    return (
       <div className='image_container'>
           {images.map((item,i)=>{
               return (
               <div className='image_item'  key={i} >
               <div style={{ backgroundImage: `url(${item.img})` }} /> 
               
               <span>{item.title}</span>
               
               </div>
               )
           })}

       </div>
    )
}
export default GamesGrid

