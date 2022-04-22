import React from "react";

export default function Setting(props) {
    return (
        <div className="mainSmall-setting">
        <label className="mainSmall-label">Select Two Graph Values</label>
        <div className="mainSmall-selectbox">
            <select className="mainSmall-select1" id="select1" defaultValue={"sentiment"} onChange={props.handleSelect1}>
                <option disabled={props.select2=== "sentiment" ? true : null} value="sentiment">Sentiment</option>
                <option disabled={props.select2=== "objectivity" ? true : null} value="objectivity">Objectivity</option>
                <option disabled={props.select2=== "count" ? true : null} value="count">Count</option>
                <option disabled={props.select2=== "volume" ? true : null} value="volume">Volume</option>
                <option disabled={props.select2=== "price" ? true : null} value="price">Price</option>
            </select>
            <select className="mainSmall-select2" id="select2" defaultValue={"objectivity"} onChange={props.handleSelect2}>
                <option disabled={props.select1=== "sentiment" ? true : null} value="sentiment">Sentiment</option>
                <option disabled={props.select1=== "objectivity" ? true : null} value="objectivity">Objectivity</option>
                <option disabled={props.select1=== "count" ? true : null} value="count">Count</option>
                <option disabled={props.select1=== "volume" ? true : null} value="volume">Volume</option>
                <option disabled={props.select1=== "price" ? true : null} value="price">Price</option>
            </select>
        </div>
        <div className="mainSmall-increment">
            <button className="mainSmall-next" onClick={props.handleNext}>Next</button>
            <button className="mainSmall-back" onClick={props.handleBack}>Back</button>
        </div>
    </div>
    )

}