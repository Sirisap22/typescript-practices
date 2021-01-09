import fs from 'fs';

class XlsxFileReader {
    constructor(public filename: string) {}

    read(): void {
        const data = fs.readFileSync(this.filename, { encoding: 'utf-8' });
        console.log(data);
    }
}

new XlsxFileReader('Book1.xlsx').read();
