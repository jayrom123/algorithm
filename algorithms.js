
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

// 插入 - 循环实现
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

// 希尔排序 - 动态间隔
function shell_dynamic(arr) {
    let o = 0;
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
                o++;
            }
        }
    }
    console.log('长度：', length, '运行次数', o)
    return arr;
}

'12345678  1234 12 43'
[8, 4, 2, 1]

// 归并排序
function merge(arr) {
    const length = arr.length;
    const currentStart = 0;
    const currentLength = 0;
    const record = [];

    const interval = 2;
    for (let i = length / 2; i >= 1; i = Math.floor(i / 2)) {
        for (let j = 0; j < arr.length - interval; j += interval) {
            let prevIndex = j;
            let nextIndex = j + interval / 2 - 1;
            const currentNewArr = [];
            for (let k = 0; k < interval; k++) {
                if (currentNewArr.length >= interval) return;
                if (arr[prevIndex] > arr[nextIndex]) {
                    currentNewArr.push(arr[nextIndex]);
                    nextIndex++;
                }
                currentNewArr.push(arr[prevIndex]);
                prevIndex++;

                if (prevIndex === j + interval / 2 - 1) {

                }
            }
        }
    }
}

// 11 
// 2 2 2 2 3  //5
//   4   7// 2
//   11 // 1



// 23 11   
// 11 5
// 5  2
// 2  1
// 1  over



module.exports = shell_dynamic;