function getArray() {

    let element = document.getElementById("array-input");
    let array = element.value.split(",");
    return array;
}

function getWaterArray() {
    let height = getArray();
    console.log("HEIGHT", height + '\n');
    let n = height.length;
    let leftMax = new Array(n);
    let rightMax = new Array(n);
    leftMax.fill(0);
    rightMax.fill(0);
    let water = new Array(n);
    water.fill(0);
    let total = 0;
    for (let i = 1; i < n; i++) {
        leftMax[i] = (Math.max(height[i - 1], leftMax[i - 1]));
    }
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = (Math.max(height[i + 1], rightMax[i + 1]));
    }
    for (let i = 1; i < n; ++i) {
        let waterLevel = Math.min(leftMax[i], rightMax[i]);
        if (waterLevel >= height[i]) {
            water[i] = (waterLevel - height[i]);
            total += waterLevel - height[i];
        } else {
            water[i] = (0);
        }
    }
    console.log("WATER", water)
    return water;
}
let onlywater = getWaterArray();
console.log("ONLY WATER", onlywater)


function makeBeforeTrap() {
    const beforetrap = document.getElementById('beforetrap');
}


function makeAfterTrap() {

    console.log("THIS");
    let res2 = getWaterArray();
    console.log("REs", res2);
    let color2 = new Array(res2.length);
    color2.fill('rgba(54, 162, 235, 0.2)');

    let lab = new Array(res2.length);
    lab.fill('');


    const aftertrap = document.getElementById('aftertrap');

    let chartStatus = Chart.getChart("aftertrap"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const myChart2 = new Chart(aftertrap, {
        type: 'bar',
        data: {
            labels: lab,
            datasets: [{
                data: res2,
                backgroundColor: color2,
                barPercentage: 1.0,
                categoryPercentage: 1,
            }]
        },
    });




    //2nd chart for both stacked
    const beforetrap = document.getElementById('beforetrap');

    let chartStatus2 = Chart.getChart("beforetrap"); // <canvas> id
    if (chartStatus2 != undefined) {
        chartStatus2.destroy();
    }

    let heights = getArray();

    var options = {
        plugins: {
            title: {
                display: true,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }

    let color1 = new Array(res2.length);
    //RED COLOR
    color1.fill('rgb(255, 0, 0,0.2)')

    const myChartBoth = new Chart(beforetrap, {
        type: 'bar',
        data: {
            labels: lab,
            datasets: [

                {
                    data: heights,
                    backgroundColor: color1,
                    barPercentage: 1.0,
                    categoryPercentage: 1,
                    label: 'Dataset 1',
                },
                {
                    data: res2,
                    backgroundColor: color2,
                    barPercentage: 1.0,
                    categoryPercentage: 1,
                    label: 'Dataset 1',
                }
            ]
        },
        options: options
    });

    //end of both chart
    let totalWater = 0;
    for (const element of res2) {
        totalWater += element;
    }

    console.log("TOTAL WATER", totalWater)
    const totalWaterObject = document.getElementById('totalwater');
    totalWaterObject.innerHTML = "Total Water Trapped - " + totalWater
    return totalWaterObject;

}



























// $.fn.textWidth = function (text, font) {

//     if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);

//     $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));

//     return $.fn.textWidth.fakeEl.width();
// };

// $('.width-dynamic').on('input', function () {
//     var inputWidth = $(this).textWidth();
//     $(this).css({
//         width: inputWidth
//     })
// }).trigger('input');


// function inputWidth(elem, minW, maxW) {
//     elem = $(this);
//     console.log(elem)
// }

// var targetElem = $('.width-dynamic');

// inputWidth(targetElem);