const divide = new Promise((resolve, reject) => {
  let n1 = 15;
  let n2 = 3;

  console.log(`Dividing ${n1} by ${n2} ...`);
  if (n2 == 0) {
    reject("Error: Division by zero is not allowed.");
  } else {
    let result = n1 / n2;
    resolve(result);
  }
});

divide.then((res) => {
  console.log("Result : ", res);
});
divide.catch((err) => {
  console.log(err);
});
