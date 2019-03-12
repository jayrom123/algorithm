
// 插入
function insert(target, startIndex = 1) {
    const arr = [...target];
    const value = arr.splice(startIndex, 1)[0];
    let current = 0;

    for (let i = startIndex - 1; i >= 0; i--) {
        if (value >= arr[i]) {
            current = i + 1;
            break;
        }
    }

    arr.splice(current, 0, value);
    startIndex += 1;

    return startIndex >= arr.length ? arr : insert(arr, startIndex)
}

module.exports = insert;