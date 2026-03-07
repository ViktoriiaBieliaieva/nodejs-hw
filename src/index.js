import fs from 'node:fs/promises';

// без кодування
const buffer = await fs.readFile('file.txt');
console.log(buffer); // <Buffer ... >

// з кодуванням
const data = await fs.readFile('file.txt', 'utf8');
console.log('Вміст файлу:', data); // "Hello"
