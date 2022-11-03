function getArray() {
    let element = document.getElementById("array-input");
    let array = element.value.split(",");
    console.log(array);
    return array;
}




function getWaterArray() {
    let height = getArray();
    console.log(height + '\n');
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
    console.log(total + " ");
    console.log(water);
    return water;
}
let onlywater = getWaterArray();

function makeBeforeTrap() {
    let color = [];
    let water = [];
    let bars = getArray();
    for (let i = 0; i < bars.length; i++) {
        if (water[i] == 0) {
            beforeRes.push({ bars: bars[i], color: "yellow" });
        } else {
            beforeRes.push({ bars: water[i], color: "blue" });
        }
    }
    console.log(beforeRes);


    let beforeObject = {
        color: color,
        water: water,
    }
    return beforeObject;
}

function makeAfterTrap() {
    let total = 0;
    let color = [];
    let water = [];
    let afterObject = {
        total: total,
        color: color,
        water: water,
    }
    return afterObject;

}




function beforeTrap() {
    let water = getWaterArray();
    let bars = getArray();
    let beforeRes = [];
    for (let i = 0; i < bars.length; i++) {
        if (water[i] == 0) {
            beforeRes.push({ bars: bars[i], color: "yellow" });
        } else {
            beforeRes.push({ bars: water[i], color: "blue" });
        }
    }
    console.log(beforeRes);
}
beforeTrap();

function afterTrap() {
    let watertrapped = getWaterArray();
    return watertrapped;
}


const beforetrap = document.getElementById('beforetrap');
const aftertrap = document.getElementById('aftertrap');

// calculations for chart 1

const myChart1 = new Chart(beforetrap, {
    type: 'bar',
    data: {
        datasets: [{
            data: [12, 19, 0, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// calculations for chart 2


let answater = getWaterArray().water;
let totalwater = getWaterArray().total;

const myChart2 = new Chart(aftertrap, {
    type: 'bar',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            data: [12, 19, 0, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
        }]
    },
    options: {
        scales: {
            x: {

                categoryPercentage: 1.0,
                barPercentage: 1.0
            }
        }
    }
});
























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