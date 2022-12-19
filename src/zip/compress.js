import * as fs from "node:fs";
import * as zlib  from 'node:zlib'
import { pipeline } from 'node:stream'

const compress = async () => {

const fileToCompress = fs.createReadStream('src/zip/files/fileToCompress.txt', 'utf-8');
const archive = fs.createWriteStream('src/zip/files/archive.gz');
const gzip = zlib.Gzip();

pipeline(
	fileToCompress,
    gzip,
    archive,
    err => {
        if (err) {
            console.error('Error', err.message)
        }
    }
);
};

await compress();