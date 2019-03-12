const { MINIMUM, MAXIMUM, PRECISION, MAX_LENGTH } = require('../testConfig');

function createRadomNumbers({ maxLength = MAX_LENGTH, maximum = MAXIMUM, minimum = MINIMUM, precision = PRECISION } = {}) {
    const currentLength = parseInt(Math.random() * maxLength);
    const createRadomNumber = () => {
        const random = Math.random() * (maximum - minimum) + minimum;
        // toFIxed方法返回一个 String 类型，parseFloat 可以转回 Number 
        return parseFloat(random.toFixed(precision));
    };
    return Array(currentLength).fill().map(createRadomNumber);
}

module.exports = createRadomNumbers;