import React from "react"
import './carousel.css'
import {images} from "../../../helpers/carousel_images_array"
import useState from "react-hook-use-state"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {useNavigate} from "react-router-dom";

const Carousel = () => {
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(0);

    const goBack = () => {
        currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(images.length - 1);
    }

    const goForward = () => {
        currentImage < images.length - 1 ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
    }

    const navigateToGame = () => {
        navigate(images[currentImage].gameUrl);
    }

    return (
        <div className='carousel'>

            <div className="left" onClick={goBack}>
                <ArrowBackIosIcon style={{fontSize: 30}}/>
            </div>
            <div className="center">
                <div onClick={navigateToGame} className="carouselInner"
                     style={{backgroundImage: `url(${images[currentImage].img})`}}
                >
                </div>
            </div>
            <div className="right" onClick={goForward}>
                <ArrowForwardIosIcon style={{fontSize: 30}}/>
            </div>
        </div>
    )
}
export default Carousel;
