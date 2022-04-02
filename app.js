// import functions and grab DOM elements
import data from './data.js';


function addItUp(bebop, jazz){
    const countMap = {};

    for (let cowboy of bebop) {

        const frequency = cowboy[jazz];

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }

    }

    return countMap;
}


const countMapped = addItUp(data, 'purchase_frequency');



const labels = Object.keys(countMapped);



const dataModified = {
    labels: labels,
    datasets: [{
        label: 'purchase_frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMapped)
    }]
};



const config = {
    type: 'bar',
    data: dataModified,
    options: {}
};
//eslint-disable-next-line
new Chart(
    document.getElementById('myChart'),
    config
);
//////////////
const countMapped2 = addItUp(data, 'cool_factor');

const labels2 = Object.keys(countMapped2);



const dataModified2 = {
    labels: labels2,
    datasets: [{
        label: 'cool_factor',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMapped2)
    }]
};

const config2 = {
    type: 'line',
    data: dataModified2,
    options: {}
};
//eslint-disable-next-line
new Chart(
    document.getElementById('myChart2'),
    config2
);

//////////////
const countMapped3 = addItUp(data, 'gender');

const labels3 = Object.keys(countMapped3);



const dataModified3 = {
    labels: labels3,
    datasets: [{
        label: 'gender',
        backgroundColor: ['yellow', 'green', 'blue', 'purple', 'red', 'violet', 'cyan', 'orange'],
        borderColor: 'white',
        data: Object.values(countMapped3)
    }]
};



const config3 = {
    type: 'pie',
    data: dataModified3,
    options: {}
};
//eslint-disable-next-line
new Chart(
    document.getElementById('myChart3'),
    config3
);