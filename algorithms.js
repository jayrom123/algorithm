
// 冒泡排序
function bubble(target) {
    let arr = [...target];
    let isUpdate = false;
    for (let i = 0; i < arr.length - 1; i++) {
        const prev = arr[i];
        const next = arr[i + 1];
        if (prev > next) {
            arr[i] = next;
            arr[i + 1] = prev;
            isUpdate = true;
        }
    }
    return isUpdate ? bubble(arr) : arr;
}

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

// 插入
function insert(target, startIndex = 1) {
    console.log(target);

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

// 插入
function insert_for(target) {
    for (let i = 1; i < target.length; i++) {
        const insertValue = target.splice(i, 1)[0];
        let insertIndex = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (insertValue >= target[j]) {
                insertIndex = j + 1;
                break;
            }
        }
        target.splice(insertIndex, 0, insertValue)
    }
    return target;
}


const test = require('./index');

test(insert_for);