#!/usr/bin/node
const numOccur = Math.floor(Number(process.argv[2]));
if (isNaN(numOccur)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < numOccur; i++) {
    console.log("C is fun");
  }
}
