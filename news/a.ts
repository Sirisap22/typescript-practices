import { readFile, utils } from 'xlsx';

const data = readFile('Book1.xlsx');

let i = 0;
for (let d in data.Sheets['Sheet1']) {
    console.log(data.Sheets['Sheet1'][d]['v']);
    if (i > 172) break;
    i++;
}
