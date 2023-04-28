import React, { useEffect } from "react";

function Taplist(){

useEffect(() => {
    window.location.href="https://app.pourwall.com/embed/63d41d5bc99d5400084b1558/backgroundColor=ffffff&foregroundColor=3c3c3c&foregroundColor2=8A8A8A&primaryFont=Open%20Sans&secondaryFont=Unica%20One&showTapNumber=true&showBeverageImage=true&showServings=true&sortTapsBy=handle";
}, []);

return(
    <div>
        <h2>Taplist</h2>
    </div>
);
}

export default Taplist;