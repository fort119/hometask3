let arr = [];

let amountOfEl = prompt('введите длинну массива');

for (let i = 0; i < amountOfEl; i++) {
  let textOfEl = prompt('введите текст для элемента' + (i + 1));
  arr.push(textOfEl);
}

function comparingNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr.sort(comparingNumbers)

arr.splice(2, 3);

console.log(arr);
alert(arr);