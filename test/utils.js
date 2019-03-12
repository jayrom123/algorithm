function isSortArr(arr, isUp = true) {
    let isAllPass = true;
    let log = null;
    const createLog = (index, text) => ({
        index,
        text,
        perv: arr[index - 1],
        current: arr[index],
    })

    if (typeof arr !== 'object' || !arr.forEach) {
        isAllPass = false;
        log = '不是数组';
    } else {
        arr.forEach((item, i) => {
            if(i > 0){
                 const isUpNotPass = isUp && item < arr[i - 1];
            const isDownNotPass = !isUp && item > arr[i - 1];
            if (typeof arr[i] !== 'number' || isUpNotPass || isDownNotPass) {
                isAllPass = false;
                log = createLog(i);
            }
            }
        })
    }

    return {
        isAllPass,
        log,
    };
}

exports.isSortArr = isSortArr;