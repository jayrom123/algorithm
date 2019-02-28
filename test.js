
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

function createRadomNumbers(number = parseInt(Math.random() * 1000), maxNumber = 100) {
    const createRadomNumber = () => (Math.random() * maxNumber).toFixed(2);
    return Array(number).fill().map(createRadomNumber);
}

function test(sortFunc) {
    let testDataFromCustomer = Object.values(datas);
    const randoms = Array(parseInt(Math.random() * 100)).fill().map(() => createRadomNumbers())
    const allData = [...testDataFromCustomer, ...randoms];
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
        console.log('all data pass', allData.length);
    }
}

module.exports = test;