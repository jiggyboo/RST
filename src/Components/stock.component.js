import { useEffect, useState } from "react";
import Buttons from "./buttons.component";

export default function Stock (props){
    const [chart, setChart] = useState(null);
    const [enlarge, setEnlarge] = useState(false);

    useEffect(() => {
        if (props.google) {
            const list = [];
            for (let i = 0; i < props.stockData.length; i++) {
                list.push([props.stockData[i].timestamp, props.stockData[i][props.select1], props.stockData[i][props.select2]]);
            }
            const data = new props.google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', props.select1);
            data.addColumn('number', props.select2);
            data.addRows(list);

            var options = {
                'title': props.stockData[0]['fullName'],
                'titleTextStyle': {
                    'fontSize': 14,
                    'color': '#FFFFFF',
                    'bold': true
                },
                'legendTextStyle': {
                    'fontSize': 12,
                    'color': '#FFFFFF',
                    'bold': true
                },
                'series': {
                    0: {targetAxisIndex: 0},
                    1: {targetAxisIndex: 1}
                },
                'hAxis': {
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    },
                    'direction': "-1",
                    'showTextEvery': "5mainSmall-"
                },
                'vAxis': {
                    0: {
                        title: props.select1
                    },
                    1: {
                        title: props.select2
                    },
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    },
                    'scaleType' : 'linear'
                },
                'width': '100%',
                'height': '100%',
                'backgroundColor': '#0f2330',
                'chartArea': {'width': '80%', 'height': '80%'},
                'legend': {
                    'position': 'bottom'
                }
            };

            const newChart = new props.google.visualization.LineChart(document.getElementById('box'+props.id));
            newChart.draw(data, options);

            setChart(newChart);
        }
    }, [props.google, props.page, props.select3, props.select1, props.select2]);

    return (
        <div className={enlarge ?"chart--box--enlarged" : props.id}>
            <div id={props.personal+props.id} className={!props.google ? 'd-none' : props.id} />
            <Buttons ticker={props.name} follow={props.follow} unfollow={props.unfollow} following={props.following} login={props.login} setEnlarge={setEnlarge} />
        </div>
    )
}
