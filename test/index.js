const getAlgPath = require('../algorithms');
const utils = require('./utils');

const datas = require('./data/special');
const createRadomNumbers = require('./data/createRadomNumbers');


function createTestData(testConfig) {
    const randoms = Array(parseInt(Math.random() * 100)).fill().map(() => createRadomNumbers(testConfig))
    return testConfig ? randoms : [...Object.values(datas), ...randoms];
}

function test(sortFunc, data) {
    let isAllPass = true;
    let log = `\n\n\n${sortFunc.name}: \n`;

    for (let current of data) {
        const result = sortFunc(current);
        const ordered = utils.isSortArr(result);

        if (!ordered.isAllPass) {
            isAllPass = false;
            log += `not pass testData: ${current}`
            break;
        }
    }

    if (isAllPass) {
        log += `all data pass: ${data.length}`
    }

    console.log(log)
}

const algorithmPaths = getAlgPath();

for (let path of algorithmPaths) {
    const algorithm = require(path);

    if (typeof algorithm !== 'function') {
        console.log(`非法排序函数： ${path}`)
        continue;
    }

    const algorithmCfg = algorithm.testConfig || {};

    test(algorithm, createTestData(algorithmCfg));
}