// 堆排序，插入排序优化版。
function heap(arr) {
    const sortedArr = [];
    // NOTE: 结构如下
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

module.exports = heap;