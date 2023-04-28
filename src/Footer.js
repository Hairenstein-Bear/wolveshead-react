import './Footer.css';


function Footer() {
    return(
        <div className='footerWrap'>
            <div className='footerNav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="http://wolvesheadpizza.com/career.html">Careers</a></li>
                    <li><a href="http://order.wolvesheadpizza.com">Order Online</a></li>
                    <li><a href="https://calendar.online/28b6936c65032fdbcc37">Event Calendar</a></li>
                    <li><a href="http://wolvesheadpizza.com/menu.html">Menu</a></li>
                    <li><a href="https://app.pourwall.com/embed/63d41d5bc99d5400084b1558/backgroundColor=ffffff&foregroundColor=3c3c3c&foregroundColor2=8A8A8A&primaryFont=Open%20Sans&secondaryFont=Inter&showTapNumber=false&showLocation=true&showBeverageImage=true&hideBeverageSourceName=false&showServings=true&showServingSize=false&showServingCurrency=false">Tap List</a></li>
                </ul>
            </div>
            <div className='copyright'>© 2023 Wolveshead Pizza & Wings</div>
        </div>
    );
}

export default Footer;