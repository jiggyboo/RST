import { useEffect, useState } from "react";

export default function MainChart (props) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (props.google) {
            const list = [];
            for (let i = 6*(props.page-1); i < props.page*6; i++) {
                const ticker = props.stockData.ranks[props.select3][i]['ticker'];
                list.push([props.stockData.data[ticker][0].ticker, props.stockData.data[ticker][0][props.select1], props.stockData.data[ticker][0][props.select2]]);
                console.log(props.stockData.data[ticker][0][props.select1], props.stockData.data[ticker][0][props.select2]);
            }
            const data = new props.google.visualization.DataTable();
            data.addColumn('string', 'Company');
            data.addColumn('number', props.select1);
            data.addColumn('number', props.select2);
            data.addRows(list);

            var options = {
                'title': "Today's top 6 stocks",
                'titleTextStyle': {
                    'fontSize': 24,
                    'color': '#FFFFFF',
                    'bold': true
                },
                'legendTextStyle': {
                    'fontSize': 12,
                    'color': '#FFFFFF',
                    'bold': true
                },
                'hAxis': {
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    }
                },
                'vAxis': {
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    }
                },
                'width': '100%',
                'height': '100%',
                'backgroundColor': '#0f2330',
                'chartArea': {'width': '75%', 'height': '80%'},
                'legend': {
                    'position': 'bottom'
                }
            };

            const newChart = new props.google.visualization.BarChart(document.getElementById('stockChart'));
            newChart.draw(data, options);

            setChart(newChart);
        }
    }, [props.google, props.page, props.select3, props.select1, props.select2]);

    return (
        <div id="stockChart" className={!props.google ? 'd-none' : 'mainChart'} />
    )
}
