const fs = require('fs');
let resizable = fs.readFileSync('package.json').toString();
let readme = fs.readFileSync('README.md').toString();
let license = fs.readFileSync('LICENSE').toString();
fs.writeFileSync('dist/package.json', resizable);
fs.writeFileSync('dist/README.md', readme);
fs.writeFileSync('dist/LICENSE', license);