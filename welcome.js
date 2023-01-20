const myChart = document.getElementById('myChart');
const lineChart = document.getElementById('lineChart');
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 120 };

const labels = ["11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan"];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Pass',
            data: [10, 20, 30, 0, 0, 40, 50],
            borderColor: '#03d7fc',
            backgroundColor: '#03d7fc',
        },
        {
            label: 'Fail',
            data: [20, 40, 50, 0, 0, 55, 60],
            borderColor: '#fc0339',
            backgroundColor: '#fc0339',
        },
        {
            label: 'Scheduled',
            data: [40, 60, 0, 70, 75, 0, 80],
            borderColor: '#fcc203',
            backgroundColor: '#fcc203',
        }
    ]
};
const lineData = {
    labels: labels,
    datasets: [
        {
        label: 'Upper Threshold',
        data: [15, 15, 15, 15, 15, 15, 15],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }
    , 
    {
        label: 'Parameter Value',
        data: [0, 12, 6, 2, 13, 17, 8],
        fill: false,
        borderColor: 'blue',
        tension: 0.1
    }
        , {
        label: 'Lower Threshold',
        data: [0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: '#C969DA',
        tension: 0.1
    }]
};

const chart = new Chart(myChart, { type: 'bar', data })
const chart2 = new Chart(lineChart, {
    type: 'line', data: lineData, 
})
