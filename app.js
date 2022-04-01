// import functions and grab DOM elements
import data from './data.js';







const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const dataModified = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};



const config = {
    type: 'line',
    data: dataModified,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);