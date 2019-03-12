// 合并排序
function merge_recursion(arr) {
    function recursion(start, length) {
        if (length === 0) return [];
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

module.exports = merge_recursion;
// const data = (new Array(1000).fill().map(() => Math.random() * 100));
// const data = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
// console.log(merge_recursion(data));