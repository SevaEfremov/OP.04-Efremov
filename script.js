const student = "Ефремов Севастьян Павлович";

document.getElementById("student").innerHTML = student;

let RealScore = {
  a: 1,
  b: 2
  }
  let c = prompt('Введите счёт первой команды');
  let d = prompt('Введите счёт второй команды');
  let f;
  
  if (a == c, b == d) {
  f('Счёт угадали верно');
  }
  else if (a > b && c > d || a < b && c < d || a === b && c === d) {
  f('Счёт не угадали, но исход угадали верно');
  } else {
  f('Ни счёт, ни исход не угадали');
  }
  
  document.getElementById("results").innerHTML = f;
  
  console.log(f);