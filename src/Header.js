import "./Header.css";
import wolveshead from './images/wolvesheadLogo.png';





function Header() {
    return(
        <div className="wrapper" >
            <div className="headerWrap">
                <div className="linkContainer" id="left">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="findUs">Find Us</a></li>
                        <li class="drop"><a href="menu" >Menu</a>

                        <div className="dropDown"><a href="https://app.pourwall.com/embed/63d41d5bc99d5400084b1558/backgroundColor=ffffff&foregroundColor=3c3c3c&foregroundColor2=8A8A8A&primaryFont=Open%20Sans&secondaryFont=Unica%20One&showTapNumber=true&showBeverageImage=true&showServings=true&sortTapsBy=handle"> Beer List</a><br/><a href="http://wolvesheadpizza.com/menu.html">Menu</a></div></li>
                    </ul>
                </div>
                <div className="logoContainer">
                    <img src={wolveshead}/>
                    <p>(941) 251-4028</p>
                </div>
                <div className="linkContainer" id="right">
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#specials">Specials</a></li>
                        <li><a href="#contact">Contact</a></li>
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