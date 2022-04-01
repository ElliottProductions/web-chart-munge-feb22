// import functions and grab DOM elements
import data from './data.js';



function addItUp(bebop){
    const countMap = {};

    for (let cowboy of bebop) {

        const frequency = cowboy.purchase_frequency;

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }

    }

    return countMap;
}


const countMapped = addItUp(data);

const labels = Object.keys(countMapped);

const dataModified = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMapped)
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