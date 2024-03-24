<template>
    <div>
        <div class="home">
            <div class="card">
                <div class="card-header">Mood Trend</div>
                <div class="card-body">
                    <div id='timeseries-chart'></div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Mood Sentiment</div>
                <div class="card-body">
                    <div id='pie-chart'></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
const auth = useAuthenticator();

export default {
    name: "Home",
    methods: {
        showMoodTrend() {
            var data = [
                {
                    x: ['2024-03-04', '2024-03-05', '2024-03-06', '2024-03-07', '2024-03-08', '2024-03-09'],
                    y: [1, -1, 2, 1, 0, -2],
                    type: 'scatter'
                }
            ];
            var layout = {
                yaxis: {
                    tickvals: [-2, -1, 0, 1, 2],
                    ticktext: ['Aweful', 'Bad', 'Meh', 'Good', 'Awesome'],
                }
            };

            Plotly.newPlot('timeseries-chart', data, layout, { displaylogo: false }, { pan: false }, { responsive: true });
        },
        showMoodSentiment() {
            var data = [{
                values: [10, 20, 30, 30, 10],
                labels: ['Aweful', 'Bad', 'Meh', 'Good', 'Awesome'],
                type: 'pie',
                textinfo: "label+percent",
            }];

            var layout = {
                height: 500,
                width: 500,
                showlegend: 'false',
                displaylogo: 'false'
            };

            Plotly.newPlot('pie-chart', data, layout, { displaylogo: false }, { displayModeBar: false });
        }
    },
    mounted() {
        this.showMoodSentiment();
        this.showMoodTrend();
    }
}
</script>