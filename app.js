let arr = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1]
];


nextGen(arr);

function nextGen(arr) {

  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {

    let innerArr = [];

    for (let j = 0; j < arr[i].length; j++) {
      
      let cell1 = (i - 1) < 0 || (j - 1) < 0 ? 0 : arr[i - 1][j - 1];
      let cell2 = (i - 1) < 0 ? 0 : arr[i - 1][j];
      let cell3 = (i - 1) < 0 || (j + 1) === arr[i].length ? 0 : arr[i - 1][j + 1];
      let cell4 = (j - 1) < 0 ? 0 : arr[i][j - 1];
      let cell5 = (j + 1) === arr[i].length ? 0 : arr[i][j + 1];
      let cell6 = (i + 1) === arr.length || (j - 1) < 0 ? 0 : arr[i + 1][j - 1];
      let cell7 = (i + 1) === arr.length ? 0 : arr[i + 1][j];
      let cell8 = (i + 1) === arr.length || (j + 1) === arr[i].length ? 0 : arr[i + 1][j + 1];
      
      let sum = cell1 + cell2 + cell3 + cell4 + cell5 + cell6 + cell7 + cell8;

      if (sum === 3 || (sum === 2 && arr[i][j] === 1)) {
        innerArr.push(1);
      } else {
        innerArr.push(0);
      }

    }

    newArr.push(innerArr);

  }

  console.log(newArr);
  return newArr;
}