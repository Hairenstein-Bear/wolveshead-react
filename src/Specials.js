import './Specials.css'
import wolf from './images/wolfLogo.png'

function Specials() {
    return(
        <div className='specialsWrapper'>
            <div className='specialsImage' id="leftWolf">
                <img src={wolf}/>
            </div>
            <div className="specialsText">
                <h2>Specials</h2>
                <p>Rotating soup of the day and daily specials.</p><br/>
                <p>Monday:$9.99 Cheese Bar pie and a pint of Bud Lt</p>
                <p>Thursday: 2 Cheeseburger Slammers for only $5.75</p>
                <p>Happy Hour Daily 3pm-6pm: 5.55 craft beer drafts, 1/2 price house wine, and bar bite specials.</p>
            </div>
            <div className='specialsImage' id="rightWolf">
                <img src={wolf}/>
            </div>
        </div>


    );
}



export default Specials