const fs = require('fs');
const path = require('path');

function getAlgPath() {
    const files = fs.readdirSync(__dirname);

    const directories = files.map((file) => {
        const currentPath = path.resolve(__dirname, file)
        const stats = fs.statSync(currentPath);
        return stats.isDirectory() ? currentPath : null;
    }).filter(path => path);

    return directories;
}

module.exports = getAlgPath;