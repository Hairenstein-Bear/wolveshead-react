import './Hero.css';
import taps from './images/taps.JPG';
import logo from './images/wolvesheadLogo.png'



const imageSource = [taps, logo];
let imageIndex = 0;
function Hero() {
    return(
        <div className="heroWrapper">
            <div className="imageWrap"
            >
                <img id="image" src={imageSource[imageIndex]} />
            </div>
        </div>
    );
}
export default Hero;
function cycleImage(imageIndex){
    imageIndex++;
    document.getElementById("image").style.src = `url(${imageSource[imageIndex]})`;
}