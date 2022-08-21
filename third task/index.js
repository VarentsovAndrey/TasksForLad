const readlineSync = require("readline-sync");

const makeRandomNumber = () => {
  let num = [];
  while (num.length < 5) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!num.includes(randomNum)) {
      num.push(randomNum);
    }
  }
  return num;
};

const equalValue = (arr) => {
  let userAnswer = readlineSync.question("enter five random numbers ");
  let userAnswArr = userAnswer.split("");

  let bulls = 0;
  let cows = 0;

  userAnswArr.forEach((el, i) => {
    if (+el === arr[i]) {
      bulls++;
    } else if (arr.includes(+el)) {
      cows++;
    }
  });
  console.log(
    `совпавших цифр не на своих местах - ${cows}, цифр на своих местах - ${bulls}`
  );
  return bulls === 5;
};

const secretValue = makeSRandomNumber();

let rounds = 10;
let event = false;

while (!event) {
  if (rounds > 0) {
    event = equalValue(secretValue);
    !event
      ? console.log(`Осталось ${--rounds} ходов`)
      : console.log("Поздравляем вы выиграли!");
  } else {
    event = true;
    console.log(
      `Не расстраивайтесь, вы проиграли, загаданное число: ${secretValue.join(
        ""
      )}`
    );
  }
}
