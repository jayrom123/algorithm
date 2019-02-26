
const datas = require('./testData');

function isSortArr(arr, isUp = true) {
    let isAllPass = true;
    let log = null;
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
    return {
        isAllPass,
        log,
    };
}

function createRadomNumbers(number = 100, maxNumber = 1000) {
    const createRadomNumber = () => (Math.random() * maxNumber).toFixed(2);
    return Array(number).fill().map(createRadomNumber);
}

function test(sortFunc) {
    let testDataFromCustomer = Object.values(datas);
    const allData = [...testDataFromCustomer, createRadomNumbers(100000, 10000)];
    const isAllPass = true;
    allData.forEach((current, i) => {
        const result = sortFunc(current);
        const varySortDirection = isSortArr(result);

        if (!varySortDirection.isAllPass) {
            isAllPass = false;
            console.log('\n not pass testData:', current);
            return;
        }
    })

    if (isAllPass) {
        console.log('all data pass');
    }
}

module.exports = test;