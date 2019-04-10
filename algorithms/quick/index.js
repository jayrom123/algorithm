
// 快速排序
function quick(arr) {
    const length = arr.length;
    const base = arr[0];
    const left = [];
    const right = [];

    if (length === 0) return [];
    if (length === 1) return right;

    for (let i = 1; i < length; i++) {
        if (arr[i] > base) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }

    return [...quilck(left), base, ...quilck(right)]
}

module.exports= quick;