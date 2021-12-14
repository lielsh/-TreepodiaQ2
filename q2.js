const fs = require('fs');
const path = require('path');
const stringify = require('csv-stringify/sync').stringify;

let data = fs.readFileSync(path.join(__dirname, 'q2.csv'));

data = data.toString().split('\r\n').map(line => line.split(','));

for (let i=1; i<data.length; i++) {

    if (data[i][2] === 'אישה') {
        data[i][2] = 'f';
    } else {
        data[i][2] = 'm';
    }

    if (data[i][3].length === 7) {
        data[i][3] = `${data[i][3].slice(0,2)}-${data[i][3].slice(2,5)}-${data[i][3].slice(5,7)}`;
    } else {
        data[i][3] = `${data[i][3].slice(0,3)}-${data[i][3].slice(3,5)}-${data[i][3].slice(5,7)}`;
    }
} 

const output = stringify(data);

fs.writeFileSync(path.join(__dirname, 'q2New.csv'), output);