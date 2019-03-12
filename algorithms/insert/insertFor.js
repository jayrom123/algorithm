// 插入 - 循环实现
function insertFor(target) {
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

module.exports = insertFor;