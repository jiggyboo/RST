import { useEffect, useState } from "react";
import Buttons from "./buttons.component";

export default function Stock (props){
    const [chart, setChart] = useState(null);
    const [setting, setSetting] = useState(false);
    const [enlarge, setEnlarge] = useState(false);

    useEffect(() => {
        if (props.google && !chart) {
            const list = [];
            for (let i = 0; i < props.content.length; i++) {
                list.push([props.content[i]['timestamp'], props.content[i]['sentiment'], props.content[i]['subjectivity']]);
            }
            const data = new props.google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', 'Sentiment');
            data.addColumn('number', 'Subjectivity');
            data.addRows(list);

            var options = {
                'title': props.name,
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
                'hAxis': {
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    },
                    'direction': "-1"
                },
                'vAxis': {
                    'textStyle' : {
                        'color' : '#FFFFFF'
                    },
                    'scaleType' : 'log',
                    'viewWindow' : {
                        'min' : -1,
                        'max' : 1
                    },
                    'ticks' : [
                        -1, -0.2, 0, 0.2, 1
                    ]
                },
                'width': '100%',
                'height': '100%',
                'backgroundColor': '#0f2330',
                'chartArea': {'width': '80%', 'height': '70%'},
                'legend': {
                    'position': 'bottom'
                }
            };

            const newChart = new props.google.visualization.LineChart(document.getElementById('box'+props.id));
            newChart.draw(data, options);

            setChart(newChart);
        }
    }, [props.google, chart]);

    return (
        <div className={enlarge ?"chart--box--enlarged" :"chart--box"}>
            <div id={props.personal+props.id} className={!props.google ? 'd-none' : props.id} />
            <Buttons ticker={props.name} follow={props.follow} unfollow={props.unfollow} following={props.following} login={props.login} setEnlarge={setEnlarge} />
        </div>
    )
}
