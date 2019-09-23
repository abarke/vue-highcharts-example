let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
    type: 'pie',
    data: {
        // Labels: Cities Population
        labels: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Bremen'],
        datasets: [{

            // label: 'Population',
            data: [
                3439100,
                1769117,
                1330440,
                998105,
                671927,
                600068,
                586217,
                581308,
                576259,
                547685,
            ],
            
            // Background Colours
            backgroundColor: [
                '#800000',
                '#A52A2A',
                '#A0522D',
                '#8B4513',
                '#D2691E',
                '#CD853F',
                '#B8860B',
                '#DAA520',
                '#F4A460',
                '#FFA07A',
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Top 10 Germanys Largest Citises',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            width: 940,
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            },
        },
        tooltips: {
            enabled: true
        },
    }
});