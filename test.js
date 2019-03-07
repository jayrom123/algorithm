
const PRECISION = 0;

const datas = require('./testData');

function isSortArr(arr, isUp = true) {
    let isAllPass = true;
    let log = null;

    if (typeof arr !== 'object' || !arr.forEach) {
        isAllPass = false;
        log = '不是数组';
    } else {
        arr.forEach((item, i) => {
            if (typeof arr[i - 1] === 'number') {
                const isUpNotPass = isUp && item < arr[i - 1];
                const isDownNotPass = !isUp && item > arr[i - 1];
                if (isUpNotPass || isDownNotPass) {
                    isAllPass = false;
                    log = {
                        index: i,
                        perv: arr[i - 1],
                        current: arr[i],
                    }
                    return;
                }
            }
        })
    }

    return {
        isAllPass,
        log,
    };
}

function createRadomNumbers(number = parseInt(Math.random() * 1000), maxNumber = 100) {
    const createRadomNumber = () => parseFloat(
        (Math.random() * maxNumber).toFixed(PRECISION)
    );
    return Array(number).fill().map(createRadomNumber);
}

function test(sortFunc) {
    let testDataFromCustomer = [];
    const randoms = Array(parseInt(Math.random() * 100)).fill().map(() => createRadomNumbers())
    const allData = [...testDataFromCustomer, ...randoms];
    let isAllPass = true;

    for (let current of allData) {
        const result = sortFunc(current);
        const varySortDirection = isSortArr(result);

        if (!varySortDirection.isAllPass) {
            isAllPass = false;
            console.log('\n not pass testData:', current);
            break;
        }
    }

    if (isAllPass) {
        console.log('all data pass', allData.length);
    }
}

module.exports = test;