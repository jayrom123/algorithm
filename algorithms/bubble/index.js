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

module.exports = bubble;