import * as fs from 'node:fs'

const read = async () => {

const stream = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8');
stream.on('data', chunk => process.stdout.write(chunk + '\n'));
stream.on('error', error => console.log('Error', error.message));
};

await read();
