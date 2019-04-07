
const setOneOrZero = (sum, arr, i, j) => {
  if (sum === 3 || (sum === 2 && arr[i][j] === 1)) {
    return 1;
  } else {
    return 0;
  }
}

const nextGen = (arr) => {

  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {

    const innerArr = [];

    for (let j = 0; j < arr[i].length; j++) {

      const cell1 = (i - 1) < 0 || (j - 1) < 0 ? 0 : arr[i - 1][j - 1];
      const cell2 = (i - 1) < 0 ? 0 : arr[i - 1][j];
      const cell3 = (i - 1) < 0 || (j + 1) === arr[i].length ? 0 : arr[i - 1][j + 1];
      const cell4 = (j - 1) < 0 ? 0 : arr[i][j - 1];
      const cell5 = (j + 1) === arr[i].length ? 0 : arr[i][j + 1];
      const cell6 = (i + 1) === arr.length || (j - 1) < 0 ? 0 : arr[i + 1][j - 1];
      const cell7 = (i + 1) === arr.length ? 0 : arr[i + 1][j];
      const cell8 = (i + 1) === arr.length || (j + 1) === arr[i].length ? 0 : arr[i + 1][j + 1];
      
      const sum = cell1 + cell2 + cell3 + cell4 + cell5 + cell6 + cell7 + cell8;

      const oneOrZero = setOneOrZero(sum, arr, i, j);
      innerArr.push(oneOrZero)

    }

    newArr.push(innerArr);

  }

  console.log(newArr);
  return newArr;
}


module.exports = {
  nextGen,
  setOneOrZero
};