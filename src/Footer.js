import './Footer.css';


function Footer() {
    return(
        <div className='footerWrap'>
            <div className='footerNav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="http://wolvesheadpizza.com/career.html">Careers</a></li>
                    <li><a href="http://order.wolvesheadpizza.com">Order Online</a></li>
                    <li><a href="https://calendar.online/9b041fcd9fd7d0af66f2">Event Calendar</a></li>
                    <li><a href="http://wolvesheadpizza.com/menu.html">Menu</a></li>
                    <li><a href="http://wolvesheadpizza.com/taplist">Tap List</a></li>
                </ul>
            </div>
            <div className='copyright'>© 2023 Wolveshead Pizza & Wings</div>
        </div>
    );
}

export default Footer;