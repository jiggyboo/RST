import React from "react";
import GoogleCharts from "./GoogleCharts";
import MainChart from "./mainchart.component";
import Stock from "./stock.component";
import Setting from "./setting.component";
import Buttons from "./buttons.component";

export default function Charts(props) {
    const google = GoogleCharts();
    const [select1, setSelect1] = React.useState("sentiment");
    const [select2, setSelect2] = React.useState("objectivity");

    const handleSelect1 = (event) => {
        setSelect1(event.target.value);
    };

    const handleSelect2 = (event) => {
        setSelect2(event.target.value);
    };
 
    const stocks = [];
    let i = 1;
    for (const stock in props.data) {
        stocks.push(<Stock google={google} login={props.login} key={i} id={props.personal+String(i)} name={stock} personal={props.personal} content={props.data[stock]} following={props.following} follow={props.follow} unfollow={props.unfollow} selection={{"select1" : select1, "select2" : select2}}/>);
        i++;
    }


    return (
        <div className="charts">
            <MainChart google={google} content={props.data} selection={props.selection}/>
            {stocks}
            <Setting handleSelect1={handleSelect1} handleSelect2={handleSelect2} select1={select1} select2={select2}/>
        </div>
    );
}