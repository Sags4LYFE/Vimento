﻿// Context of doughnut element in index
var ctx = document.getElementById('doughnut');

// Instantiates a new Chart (Doughnut)
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Fiber', 'DSL', 'Kabel', 'Mobil'],
        datasets: [{
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: { // Creates function, showing calculated percentages and '%', in the tooltip element
                label: function (tooltipItem, data) {
                    return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                }
            }
        }
    } 
});

// Arrays to contain the sorted markers
var fiberBest = [];
var dslBest = [];
var kabelBest = [];
var mobilBest = [];

// Sorts the addresses with best technologies into seperate arrays, from the array with markers given in param.
function allocateBest(arrayWithMarkers) {
    fiberBest = [];
    dslBest = [];
    kabelBest = [];
    mobilBest = [];
    for (var i = 0; i < arrayWithMarkers.length; i++) {
        if (arrayWithMarkers[i].downFiber >= arrayWithMarkers[i].downKabel &&
            arrayWithMarkers[i].downFiber >= arrayWithMarkers[i].downDsl &&
            arrayWithMarkers[i].downFiber >= arrayWithMarkers[i].mobil) {
            fiberBest.push(arrayWithMarkers[i]);
        } else if
            (arrayWithMarkers[i].downDsl > arrayWithMarkers[i].downKabel &&
            arrayWithMarkers[i].downDsl > arrayWithMarkers[i].downFiber &&
            arrayWithMarkers[i].downDsl > arrayWithMarkers[i].mobil) {
            dslBest.push(arrayWithMarkers[i]);
        } else if
            (arrayWithMarkers[i].downKabel >= arrayWithMarkers[i].downDsl &&
            arrayWithMarkers[i].downKabel > arrayWithMarkers[i].downFiber &&
            arrayWithMarkers[i].downKabel >= arrayWithMarkers[i].mobil) {
            kabelBest.push(arrayWithMarkers[i]);
        } else if
            (arrayWithMarkers[i].mobil >= arrayWithMarkers[i].downDsl &&
            arrayWithMarkers[i].mobil > arrayWithMarkers[i].downFiber &&
            arrayWithMarkers[i].mobil > arrayWithMarkers[i].downKabel) {
            mobilBest.push(arrayWithMarkers[i]);
        }
    }
}

// Calculates how many % a value is of 'something'
function calculatePercentageOf(val, totalAmount) {
    var result = (val / totalAmount) * 100
    return result.toFixed(2);
}

//Updates the top card (%Fiber)
function updateTopCardFiber(array) {
    var fiberPercentageToken = calculatePercentageOf(fiberBest.length, array.length);
    document.getElementById("fiberSpeedTopCard").innerHTML = fiberPercentageToken.toString() + "%";
    var fiberPercentageAttrString = "width: " + fiberPercentageToken.toString() + "%";
    document.getElementById("progressFiberPercent").setAttribute("style", fiberPercentageAttrString);
}

/* Updates the chart with an array of markers, by allocating into 'best' catagories,
 * then calculating how many % each 'best' array is of all the markers, and sets that as the data to be added*/
function updateDoughnutChart(arrayWithMarkers) {
    allocateBest(arrayWithMarkers);
    myDoughnutChart.data.datasets[0].data[0] = calculatePercentageOf(fiberBest.length, arrayWithMarkers.length);
    myDoughnutChart.data.datasets[0].data[1] = calculatePercentageOf(dslBest.length, arrayWithMarkers.length);
    myDoughnutChart.data.datasets[0].data[2] = calculatePercentageOf(kabelBest.length, arrayWithMarkers.length);
    myDoughnutChart.data.datasets[0].data[3] = calculatePercentageOf(mobilBest.length, arrayWithMarkers.length);
    myDoughnutChart.update();

    // Updates additional % Display in the top card
    updateTopCardFiber(arrayWithMarkers);
    unikAdd(arrayWithMarkers);
}
// Called initially when page loads (index declutter)
updateDoughnutChart(allMarkersArray);
