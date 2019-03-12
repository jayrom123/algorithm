// 基数排序，目前实现只支持正整数
function radix(arr) {
    let currentRadix = 1;

    function recursion(arr) {
        const buket = new Array(10).fill(null).map(() => []);
        let isAllRadixRecover = true;
        for (const item of arr) {
            const stringify = String(item);

            if (stringify.length < currentRadix) {
                buket[0].push(item);
                continue;
            };

            if (stringify.length > currentRadix) {
                isAllRadixRecover = false;
            }

            const start = -currentRadix;
            // 第二个参数不能为 0
            const end = start === -1 ? undefined : start + 1;
            const radix = Number(stringify.slice(start, end));
            buket[radix].push(item);
        }

        currentRadix += 1;

        const result = buket.reduce((current, merged) => current.concat(merged), []);

        const end = !isAllRadixRecover ? recursion(result) : result;
        return end;
    }

    return recursion(arr);
}

radix.testConfig = {
    mininum: 0,
    precision: 0
}

module.exports = radix;