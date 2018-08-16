// 스트림 파이프 테스트
const zlib = require('zlib');
const fs = require('fs');

// testFile.txt로 읽기 스트림을 생성한 후 testFile.txt.gz 파일 쓰기 스트림, gzip 압축 스트림과 파이프로 연결하여 gz 파일로 압축
const readStream = fs.createReadStream('./testFile.txt');
const writeStream = fs.createWriteStream('./testFile.txt.gz');
const gzipStream = zlib.createGzip();

readStream.pipe(gzipStream).pipe(writeStream);