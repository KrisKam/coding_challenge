
const setOneOrZero = (sum, arr, i, j) => {
  if (sum === 3 || (sum === 2 && arr[i][j] === 1)) {
    return 1;
  } else {
    return 0;
  }
}

const nextGen = (arr) => {

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

      let oneOrZero = setOneOrZero(sum, arr, i, j);
      innerArr.push(oneOrZero)

    }

    newArr.push(innerArr);

  }

  return newArr;
}


module.exports = {
  nextGen,
  setOneOrZero
};