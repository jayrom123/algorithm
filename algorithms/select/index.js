
// 选择排序
function selection(target, remainderLength = target.length) {
    const arr = [...target];
    let current = 0;

    for (let i = 1; i < remainderLength; i++) {
        if (arr[i] > arr[current]) current = i;
    }

    const value = arr.splice(current, 1)[0];
    arr.splice(remainderLength - 1, 0, value);

    remainderLength -= 1;

    return remainderLength <= 1 ? arr : selection(arr, remainderLength);
}

module.exports = selection;