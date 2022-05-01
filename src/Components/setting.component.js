import React from "react";

export default function Setting(props) {
    return (
        <div className="mainSmall-setting">
        <label className="mainSmall-label">Select Two Graph Values</label>
        <div className="mainSmall-selectbox">
            <select className="mainSmall-select1" id="select1" defaultValue={"sentiment"} onChange={props.handleSelect1}>
                <option disabled={props.select2=== "sentiment" ? true : null} value="sentiment">Sentiment</option>
                <option disabled={props.select2=== "subjectivity" ? true : null} value="subjectivity">Subjectivity</option>
                <option disabled={props.select2=== "count" ? true : null} value="count">Count</option>
                <option disabled={props.select2=== "volume" ? true : null} value="volume">Volume</option>
                <option disabled={props.select2=== "price" ? true : null} value="price">Price</option>
            </select>
            <select className="mainSmall-select2" id="select2" defaultValue={"subjectivity"} onChange={props.handleSelect2}>
                <option disabled={props.select1=== "sentiment" ? true : null} value="sentiment">Sentiment</option>
                <option disabled={props.select1=== "subjectivity" ? true : null} value="subjectivity">Subjectivity</option>
                <option disabled={props.select1=== "count" ? true : null} value="count">Count</option>
                <option disabled={props.select1=== "volume" ? true : null} value="volume">Volume</option>
                <option disabled={props.select1=== "price" ? true : null} value="price">Price</option>
            </select>
        </div>
        <div className="mainSmall-sortbox">
            <label className="mainSmall-label">Sort By</label>
            <select className="mainSmall-select3" id="select3" defaultValue={"sentiment"} onChange={props.handleSelect3}>
                <option value="sentiment">Sentiment</option>
                <option value="count">Count</option>
                <option value="follower">Follower Count</option>
                <option value="sentimentScore">Sentiment Score</option>
                <option value="countScore">Count Score</option>
            </select>
        </div>
        <div className="mainSmall-increment">
            <button disabled={props.page===1 ? true : null} className="mainSmall-back" onClick={props.handleBack}>Back</button>
            <div>Page {props.page} </div>
            <button disabled={props.page===5 ? true : null} className="mainSmall-next" onClick={props.handleNext}>Next</button>
        </div>
    </div>
    )

}