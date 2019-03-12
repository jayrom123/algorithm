// 计数排序 - 针对有输入范围的整数排序
function count(arr) {
    const repeatedCount = [];
    const result = [];

    for (let current of arr) {
        const content = repeatedCount[current] || 0;
        repeatedCount[current] = content + 1;
    }

    for (let index in repeatedCount) {
        const count = repeatedCount[index];
        if (count > 0) {
            for (let j = 0; j < count; j++) {
                result.push(parseFloat(index))
            }
        }
    }

    return result;
}

count.testConfig = {
    mininum: 0,
    maxinum: 10,
    precision: 0,
}

module.exports = count;