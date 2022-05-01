import React from "react";
import GoogleCharts from "./GoogleCharts";
import MainChart from "./mainchart.component";
import Stock from "./stock.component";
import Setting from "./setting.component";

export default function Charts(props) {
    const google = GoogleCharts();
    const [select1, setSelect1] = React.useState("sentiment");
    const [select2, setSelect2] = React.useState("subjectivity");
    const [select3, setSelect3] = React.useState("sentiment");
    const [page, setPage] = React.useState(1);

    const handleSelect1 = (event) => {
        setSelect1(event.target.value);
    };

    const handleSelect2 = (event) => {
        setSelect2(event.target.value);
    };

    const handleSelect3 = (event) => {
        setSelect3(event.target.value);
    };

    const handleNext = () => {
        if (page < 5) {
            setPage(page + 1);
        }
    };

    const handleBack = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const stocks = [];
    const pageLimit = 6;
    for (let i = 0; i <=5; i++) {
        if (i <= pageLimit) {
            const ticker = props.stockData.ranks[select3][(page-1)*6+i]['ticker'];
            console.log(ticker);
            stocks.push(<Stock google={google}
                login={props.login}
                key={i+(page-1)*6}
                id={props.personal+String(i+1)}
                personal={props.personal}
                stockData={props.stockData.data[ticker]}
                following={props.following}
                follow={props.follow}
                unfollow={props.unfollow}
                select1={select1}
                select2={select2}
                select3={select3}
                />);
        }
        else {
            break;
        }
    }

    return (
        <div className="charts">
            <MainChart 
                google={google} 
                page={page} 
                stockData={props.stockData} 
                select1={select1}
                select2={select2}
                select3={select3} />
            {stocks}
            <Setting 
                handleSelect1={handleSelect1} 
                handleSelect2={handleSelect2} 
                handleSelect3={handleSelect3} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                page={page} 
                select1={select1} 
                select2={select2} 
                select3={select3} />
        </div>
    );
}