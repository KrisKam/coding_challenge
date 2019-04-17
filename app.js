
const getAliveOrDead = (sum, cellValue) => {
  if (sum === 3 || (sum === 2 && cellValue === 1)) {
    return 1;
  } else {
    return 0;
  }
}

const getNeighborSum = (arr, i, j) => {
  let cellSum = 0;
  for (let x = (i - 1); x <= (i + 1); x++) {
    for (let y = (j - 1); y <= (j + 1); y++) {
      if (x < 0 || y < 0 || x >= arr.length || y >= arr[i].length) {
        continue;
      } 
      if (x === i && y === j) {
        continue;
      }
      cellSum += arr[x][y];
    }
  }
  return cellSum;
}

const nextGen = (arr) => {

  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {

    const innerArr = [];

    for (let j = 0; j < arr[i].length; j++) {

      const neighborSum = getNeighborSum(arr, i, j)

      const oneOrZero = getAliveOrDead(neighborSum, arr[i][j]);
      innerArr.push(oneOrZero)

    }

    newArr.push(innerArr);

  }

  console.log(newArr);
  return newArr;
}


module.exports = {
  nextGen,
  getAliveOrDead
};