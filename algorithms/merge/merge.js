
// 归并排序
function merge(arr) {
    const length = arr.length;

    // 单个区域已排序长度
    let interval = 2;
    for (let i = length; i > 1; i = Math.ceil(i / 2)) {

        for (let j = 0; j < arr.length; j += interval) {
            let prevIndex = j;
            let nextIndex = j + interval / 2;
            const currentNewArr = [];
            const min = Math.min(j + interval, arr.length);
            const pervMin = Math.min(min, j + interval / 2)
            const currentLength = min - j;

            for (let k = 0; k < interval; k++) {
                if (currentNewArr.length >= currentLength) break;

                const isAddNext = prevIndex >= pervMin || (nextIndex < min && arr[prevIndex] > arr[nextIndex])

                if (isAddNext) {
                    currentNewArr.push(arr[nextIndex]);
                    nextIndex++;
                } else {
                    currentNewArr.push(arr[prevIndex]);
                    prevIndex++;
                }
            }

            arr.splice(j, currentLength, ...currentNewArr)
        }

        interval *= 2;
    }

    return arr;
}

module.exports = merge;