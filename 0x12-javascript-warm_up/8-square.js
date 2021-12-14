#!/usr/bin/node
const sqrSize = Math.floor(Number(process.argv[2]));
if (isNaN(sqrSize)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < sqrSize; i++) {
    let row = '';
    for (let j = 0; j < sqrSize; j++) rows += 'X';
    console.log(rows);
  }
}
