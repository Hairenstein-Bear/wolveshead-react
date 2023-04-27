import './infoBox.css'


function infoBox() {
    return(
        <div className="infoWrap">
            <div className="info" id="left">
                <h4>Online Ordering Available!</h4>
            </div>
            <a href="https://onlineordering.rmpos.com/Order/(S(f1vbsuxmgmpet5s0ds3xl2yr))/?wci=3i10pa5t&fbclid=IwAR0CsekVpbnW5XjUu_yYEQEZxVWdBZa_j2AAVY3quQWPSgrkS5zbzp2s4WA">
                <div className="orderLink">
                    Order Now
                </div>
            </a>
            <div className="info" id="right">
                <h4>Visit us at:</h4>
                <p>1837 Lakewood Ranch Blvd <br/>
                Lakewood Ranch, FL 34211 </p>
            </div>
        </div>
    );
}
export default infoBox;