
// LOOPING A TRIANGLE

let hash = "";

for (let i = 0; i < 7; i++) {
  hash += "#";
  console.log(hash);
}

/* 
for (let line = "#"; line.length < 8; line += "#")
console.log(line); 
*/



//FIZZBUZZ

let number = 0;

while (number < 100) {
  if (number % 5 == 0 && number % 3 == 0) {
    console.log("Fizzbuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
  number++;
};

/* 
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
} 
*/



// CHESSBOARD

const size = 8;
let board = "";

for (let n = 0; n < size; n++) {
  for (let i = 0; i < size; i++) {
    if ((n + i) % 2 == 0){
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
};
console.log(board);

/* 
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
*/