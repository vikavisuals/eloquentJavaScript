
// LOOPING A TRIANGLE

let hash = "";

for (let i = 0; i < 7; i++) {
  hash += "#";
  console.log(hash);
}


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


// CHESSBOARD

const size = 8;

