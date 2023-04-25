import './Gallery.css';
import imgOne from './images/pic1.JPG';
import imgTwo from './images/pic3.JPG';
import imgThree from './images/pic4.JPG';
import imgFour from './images/pic2.JPG';
import imgFive from './images/johnKids.JPG';
import imgSix from './images/kids.JPG';
import imgSeven from './images/cornHole.JPG'
import imgEight from './images/mark.JPG';

function Gallery() {
    return(
        <div className='galleryWrap'>
            <div className='sliderWrap'>
            <div className='photoWrap' id="left">
                <div className='photo'><img src={imgOne}/></div>
                <div className='photo'><img src={imgTwo}/></div>
                <div className='photo'><img src={imgThree}/></div>
                <div className='photo'><img src={imgFour}/></div>
            </div>
            <div className='photoWrap' id="middle">
                <div className='photo'><img src={imgFive}/></div>
                <div className='photo'><img src={imgSix}/></div>
                <div className='photo'><img src={imgSeven}/></div>
                <div className='photo'><img src={imgEight}/></div>
            </div>
            <div className='photoWrap' id="right">
                <div className='photo'><img src={imgOne}/></div>
                <div className='photo'><img src={imgTwo}/></div>
                <div className='photo'><img src={imgThree}/></div>
                <div className='photo'><img src={imgFour}/></div>
            </div>
            <div className='photoWrap' id="middle">
                <div className='photo'><img src={imgFive}/></div>
                <div className='photo'><img src={imgSix}/></div>
                <div className='photo'><img src={imgSeven}/></div>
                <div className='photo'><img src={imgEight}/></div>
            </div>
            </div>
        </div>
    );
}


export default Gallery;