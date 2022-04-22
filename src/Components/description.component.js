import React, {Component} from "react";

export default class Description extends Component {
    render() {
        return (
            <div className="description">
                <div className="description-title">What is Reddit Stock Tracker?</div>
                <div className="description-body">
                Reddit Stock Tracker is a web application that scrapes the top posts from Reddit to find often discussed stocks and Reddit's sentiment towards them.
                Stocks' objectivity and subjectivity are measured via <a className="description-textblob" href="https://textblob.readthedocs.io/en/dev/">TextBlob</a>. 
                RST backend keeps track of objectivity, subjectivity and mentioned count of the stocks. It is a work in progress. Soon users will be able to register and login to keep and follow a list of stocks of their choosing.
                </div>
            </div>
        )
    }
}