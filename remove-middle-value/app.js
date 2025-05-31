function RemoveMiddleValue(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  for (let i = middleIndex; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

const original = [1, 2, 3, 4, 5];


console.log("Original array:", original);

console.log(RemoveMiddleValue([1, 2, 3, 4, 5]));


