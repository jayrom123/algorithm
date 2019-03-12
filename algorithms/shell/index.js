// 希尔排序 - 经典模式

function shell(arr) {
    const interval = [
        Math.ceil(arr.length / 2),
        2,
        1,
    ];
    for (let i = 0; i < interval.length; i++) {
        const currentInterval = interval[i];
        for (let j = currentInterval; j < arr.length; j++) {
            const current = arr[j];
            for (let k = j - currentInterval; k >= 0; k -= currentInterval) {
                if (current > arr[k]) {
                    break;
                }
                arr[j] = arr[k];
                arr[k] = current;
            }
        }
    }
    return arr;
}

module.exports = shell;