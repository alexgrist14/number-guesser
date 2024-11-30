const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Компьютер 1 загадал число:", secretNumber);

let low = 1;
let high = 100;
let guess;

function checkNumber(guess) {
  if (guess < secretNumber) {
    return "Больше";
  } else if (guess > secretNumber) {
    return "Меньше";
  } else {
    return "Угадал!";
  }
}

while (true) {
  guess = Math.floor((low + high) / 2);
  console.log("Компьютер 2: Пробую число", guess);

  const response = checkNumber(guess);
  console.log("Компьютер 1:", response);

  if (response === "Угадал!") {
    break;
  } else if (response === "Больше") {
    low = guess + 1;
  } else if (response === "Меньше") {
    high = guess - 1;
  }
}
