let numbers = [153, 407, 157, 371, 907];
for (let j = 0; j < numbers.length; j++) {
  let number = numbers[j];
  let str = number.toString();
  let sum = 0;
  //sum of given number
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  // Armstrong number
  armSum = 0;
  let n = 3;
  for (let i = 0; i < str.length; i++) {
    armSum += str[i] ** n;
  }
  if (armSum == number) {
    arm = "Yes";
  } else {
    arm = "No";
  }
  //all factor
  let factor = [];
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      factor.push(i);
    }
  }
  // program to check if a number is prime or not
  let isPrime = "yes";

  // check if number is equal to 1
  if (number === 1) {
    isPrime = "yes";
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = "No";
        break;
      }
    }
  }

  // check if number is less than 1
  else {
    isPrime = "No";
  }

  //all print statements
  console.log(`Number :- ${number}`);
  console.log(`Sum of its digits: ${sum}`);
  console.log(`Is it an Armstrong number? ${arm}`);
  console.log(`Is it a prime number? ${isPrime}`);
  console.log(`Factors: ${factor.toString()}`);
  console.log("\n \n");
}
