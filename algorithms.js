
// test log
function log(obj, ...reset) {
    console.log(JSON.stringify(obj), ...reset)
}


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

// 合并排序
function merge_recursion(arr) {
    function recursion(start, length) {
        if (length === 1) return [arr[start]];

        const prevLength = Math.floor(length / 2);
        const nextLength = length - prevLength;

        const prev = recursion(start, prevLength)
        const next = recursion(start + prevLength, nextLength)
        const newArr = [];

        for (let i = 0; i < length; i++) {
            if (prev[0] === undefined || next[0] === undefined) {
                newArr.push(...prev, ...next);
                break;
            }
            newArr.push(prev[0] < next[0] ? prev.splice(0, 1)[0] : next.splice(0, 1)[0]);
        }

        return newArr;
    }
    return recursion(0, arr.length)
}

// 快速排序
function quilck(arr) {
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

function heapSort(arr) {
    const sortedArr = [];
    let siglePointDemo = {
        value: 0,
        children: [
            {
                value: 0,
                children: [],
                parent: {}
            },
            {
                value: 0,
            }
        ]
    }

    function createPoint(value, parent = null) {
        return {
            parent,
            value,
            sorted: false,
            children: []
        }
    }

    function creatHeap(arr) {
        const heap = createPoint(arr.shift());
        const actionStack = [heap];
        let stackIndex = 0;

        function recursion(heap) {
            if (arr.length === 0) return;
            const spliceLength = arr.length === 1 ? 1 : 2;
            const firstTwo = arr.splice(0, spliceLength);

            firstTwo.forEach((current) => {
                const point = createPoint(current, heap);
                heap.children.push(point);
                actionStack.push(point);
            })
            const nextPoint = actionStack[stackIndex];
            stackIndex++;
            recursion(nextPoint);
        }
        recursion(heap);

        return actionStack;
    }

    function getMaxChildren(children) {
        let maxChildren = null;

        for (let i = children.length - 1; i >= 0; i--) {
            const current = children[i];

            if (current.sorted) continue;

            if (!maxChildren || current.value > maxChildren.value) {
                maxChildren = current;
            }
        }

        return maxChildren;
    }

    function sinkSmaller(target) {
        const maxChildren = getMaxChildren(target.children);
        if (maxChildren && maxChildren.value > target.value) {
            const temp = target.value;
            target.value = maxChildren.value;
            maxChildren.value = temp;
            sinkSmaller(maxChildren);
        }
    }

    const actionStack = creatHeap(arr);

    // 将初始堆排序
    for (let i = actionStack.length - 1; i >= 0; i--) {
        const currentPoint = actionStack[i];
        sinkSmaller(currentPoint);
    }

    // 将半成品堆排序 => 标准排序
    for (let i = actionStack.length - 1; i >= 0; i--) {
        const lastPoint = actionStack[i];
        const firstPoint = actionStack[0];

        const temp = firstPoint.value;
        firstPoint.value = lastPoint.value;
        lastPoint.value = temp;

        lastPoint.sorted = true;
        sortedArr.unshift(lastPoint.value);

        sinkSmaller(firstPoint);
    }

    return sortedArr;
}


// 计数排序 - 针对有输入范围的整数排序
function count(arr) {
    const repeatedCount = [];
    const result = [];

    for (let i in arr) {
        const current = arr[i];
        const content = repeatedCount[current] || 0;
        repeatedCount[current] = content + 1;
    }
    for (let index in repeatedCount) {
        const count = repeatedCount[index];
        if (count > 0) {
            for (let j = 0; j < count; j++) {
                result.push(index)
            }
        }
    }
    return result;
}


// 桶排序 - 计数排序升级版
function bucketSort(arr) {
    const bucket = [];

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

module.exports = bucketSort