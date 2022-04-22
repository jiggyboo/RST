import { useEffect, useState } from "react";

export default function MainChart (props) {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        if (props.google && !chart) {
            const list = [];
            for (let company in props.content) {
                list.push([props.content[company][0].ticker, props.content[company][0].sentiment, props.content[company][0].subjectivity]);
            }
            const data = new props.google.visualization.DataTable();
            data.addColumn('string', 'Company');
            data.addColumn('number', 'Sentiment');
            data.addColumn('number', 'Subjectivity');
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
    }, [props.google, chart]);

    return (
        <div id="stockChart" className={!props.google ? 'd-none' : 'mainChart'} />
    )
}
