// 桶排序 - 计数排序升级版
function bucket(arr) {
    const bucket = [];

    // 将数字插入到已排序的数组中
    function insert(arr = [], number) {
        if (!arr || arr.legnth === 0) return [number];
        for (let i in arr) {
            const current = arr[i];
            if (current >= number) {
                arr.splice(i, 0, number);
                return arr;
            }
        }
        arr.push(number);
        return arr;
    }

    for (let i in arr) {
        const current = arr[i];
        const firstNumber = parseFloat(String(current).slice(0, 1));
        bucket[firstNumber] = insert(bucket[firstNumber], current);
    }

    function mergeBucket(bucket, result = []) {
        let minSeries = null;

        for (let i in bucket) {
            const series = bucket[i];
            if (series && series.length > 0) {
                minSeries = minSeries === null || series[0] < minSeries[0] ? series : minSeries;
            }
        }

        if (minSeries === null) return result;

        result.push(minSeries.shift())
        return mergeBucket(bucket, result)
    }

    return mergeBucket(bucket);
}

bucket.testConfig = {
    mininum: 0
}


module.exports = bucket;