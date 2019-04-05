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
      let cell1 = (i - 1) < 0 || (j - 1) < 0 ? 0 : arr[i - 1][j - 1],
        cell2 = (i - 1) < 0 ? 0 : arr[i - 1][j],
        cell3 = (i - 1) < 0 || (j + 1) === arr[i].length ? 0 : arr[i - 1][j + 1],
        cell4 = (j - 1) < 0 ? 0 : arr[i][j - 1],
        cell5 = (j + 1) === arr[i].length ? 0 : arr[i][j + 1],
        cell6 = (i + 1) === arr.length || (j - 1) < 0 ? 0 : arr[i + 1][j - 1],
        cell7 = (i + 1) === arr.length ? 0 : arr[i + 1][j],
        cell8 = (i + 1) === arr.length || (j + 1) === arr[i].length ? 0 : arr[i + 1][j + 1];
      
      let sum = cell1 + cell2 + cell3 + cell4 + cell5 + cell6 + cell7 + cell8;

      console.log("i: ", i, " j: ", j, " cell value: ", arr[i][j], "=> ", cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, " sum: ", sum);

      if (sum === 3 || (sum === 2 && arr[i][j] === 1)) {
        // newArr[i][j] = 1;
        innerArr.push(1);
      } else {
        // newArr[i][j] = 0;
        innerArr.push(0);
      }
    }
    newArr.push(innerArr);
  }
  console.log(newArr);

}