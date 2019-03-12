// 希尔排序 - 动态间隔
function dynamicGap(arr) {
    const length = arr.length;
    for (let i = Math.floor(length / 2); i > 0; i = Math.floor(i / 2)) {
        const currentInterval = i;
        for (let j = currentInterval; j < length; j++) {
            const current = arr[j];
            for (let k = j - currentInterval; k >= 0; k -= currentInterval) {
                const target = arr[k];
                if (current >= target) {
                    break;
                }
                arr[k] = current;
                arr[j] = target;
            }
        }
    }
    return arr;
}


module.exports = dynamicGap;