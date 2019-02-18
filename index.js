function test(sortFunc) {
    let arr = [4, 3, 2, 3, 1, 9];
    const result = sortFunc(arr);
    console.log(result.length, '\n', JSON.stringify(result));
}


module.exports = test;