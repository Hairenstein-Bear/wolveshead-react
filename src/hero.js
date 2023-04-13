import './Hero.css';
import taps from './images/taps.JPG';
import logo from './images/wolvesheadLogo.png'
import left from './images/left.png'
import right from './images/right.png'
import taco from './images/beefTaco.JPG'
import beer from './images/beer.JPG'
import buffaloChick from './images/buffaloChicken.JPG'
import pizza from './images/pizza.jpg'
import wall from './images/themeWall.webp'

const imageSource = [beer, wall, taps, taco, buffaloChick, pizza];
let imageIndex = 0;
function Hero() {
    return(
        <div className="heroWrapper">
            <div className="imageWrap">
                <div onClick={cycleImageLeft} className="photoNavigate" id="leftArrow">
                    <img class="arrow" src={right} />
                </div>
                <img id="image" src={imageSource[imageIndex]} />
                <div onClick={cycleImageRight} className="photoNavigate" id="rightArrow">
                    <img class="arrow" src={right} />
                </div>
            </div>
        </div>
    );
}
export default Hero;
function cycleImageLeft(){
    // console.log("click");
    imageIndex--;
    if(imageIndex < 0 ){
        imageIndex = imageSource.length-1;
    }
    document.getElementById("image").src=imageSource[imageIndex];
}
function cycleImageRight(){
    // console.log("click");
    imageIndex++;
    if(imageIndex > imageSource.length-1){
        imageIndex = 0;
    }
    document.getElementById("image").src=imageSource[imageIndex];
}