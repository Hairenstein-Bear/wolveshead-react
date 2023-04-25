import "./Header.css";
import wolveshead from './images/wolvesheadLogo.png';
import facebook from './images/facebookLogo.webp';
import instagram from './images/instagramLogo.webp';
import { Outlet, Link } from "react-router-dom";



function Header() {
    return(
        <div className="wrapper" >
            <div className="headerWrap">
                <div className="linkContainer" id="left">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#location">Find Us</a></li>
                        <li class="drop">Menu

                        <div className="dropDown"><a href="https://app.pourwall.com/embed/63d41d5bc99d5400084b1558/backgroundColor=ffffff&foregroundColor=3c3c3c&foregroundColor2=8A8A8A&primaryFont=Open%20Sans&secondaryFont=Unica%20One&showTapNumber=true&showBeverageImage=true&showServings=true&sortTapsBy=handle"> Beer List</a><br/><a href="http://wolvesheadpizza.com/menu.html">Menu</a></div></li>
                    </ul>
                </div>
                <div className="logoContainer">
                    <img id="wolvesLogo" src={wolveshead}/>
                    <div className="logoLink"><a href="https://www.facebook.com/WolvesHead/"><img classname="logoLink" src={facebook}/></a></div>
                    <p>(941) 251-4028</p>
                    <div className="logoLink"><a href="https://www.instagram.com/wolvesheadpizzaandwings/"><img classname="logoLink" src={instagram}/></a></div>
                </div>
                <div className="linkContainer" id="right">
                    <ul>
                        <li><a href="https://calendar.online/9b041fcd9fd7d0af66f2">Events</a></li>
                        <li><a href="#specials">Specials</a></li>
                        <li><a href="http://wolvesheadpizza.com/contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    function dropDown(){
        const menu = document.getElementById("drop");
        menu.addEventListener("mouseover", function(){
            console.log("we mousein");
            document.getElementsByClassName("dropDown").style.display="block";
        });
        }
    }

export default Header;