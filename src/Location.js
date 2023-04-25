import './Location.css';
import sign from './images/sign.webp';
import wolvesFront from './images/wolvesFrontDoor.png';
import wolvesSide from './images/wolvesSide.png';

let timeoutId
let i=0;
const imgSrcArray = [sign, wolvesFront, wolvesSide];
function Location() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(swapImage,10000);
    return(
        <div className='locationWrapper'>
            <div className='mapWrap' id="location">
                <iframe className='googleMap' src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJFdH71Ko7w4gRPzIOKegOlxc&key=AIzaSyDwbBSaPhowrit2pCNHB5WK_1x_zEEKQ7Y"></iframe>
            </div>
            <div className='textWrap'>
                <div className='address'>
                    <h2>Address:</h2>
                    <p>1837 Lakewood Ranch Blvd<br/>Lakewood Ranch, FL 34211<br/><br/>(941)251-7028</p>
                </div>
                <div className='hours'>
                    <h2>Hours:</h2>
                    <p>Sun-Mon: 11am-9pm<br/><br/>
                       Tue-Thur: 11am-10pm<br/><br/>
                       Fri-Sat: 11am-11pm</p>
                </div>
            </div>
            <div className='locationImage'>
                <img id="storeFront" src={sign}/>
            </div>
        </div>
    );
}

function swapImage(){
    const image = document.getElementById("storeFront");
    console.log("swapImage function called");
    i++;
    if(i > imgSrcArray.length-1){
        i=0;
    }
    image.src = imgSrcArray[i];
    console.log(i);
    timeoutId = setTimeout(swapImage,10000);
    // setTimeout(swapImage,10000);
    // const imgSrcArray = [sign, wolvesFront, wolvesSide];
    // image.classList.remove("fadeIn");
    // image.classList.add("fadeOut");
    
    // image.classList.remove("fadeIn");
    // image.classList.add("fadeIn");
}

export default Location;