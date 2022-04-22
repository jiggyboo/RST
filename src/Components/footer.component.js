import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        function closeFooter() {
            document.getElementsByClassName("footer")[0].style.display = "none";
        }
        return (
            <div onClick={closeFooter} className="footer">
                <div  className="footer-body">
                    Disclaimer: Any information found on Reddit Stock Tracker is NOT a financial advice. Reddit Stock Tracker is not responsible for ANY financial loss due to using the information found on Reddit Stock Tracker.
                </div>
          </div>
        )
    }
}