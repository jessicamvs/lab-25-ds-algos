const algos = module.exports = {};

algos.mergeSort = function(arr) {
  if(!Array.isArray(arr) || !arr.length) return Error;

  if(arr.length < 2) return arr;

  let mid = Math.floor(arr.length/2);

  let left = algos.mergeSort(arr.slice(0, mid));
  let right = algos.mergeSort(arr.slice(mid, arr.length));

  return algos.merge(left, right);
};

algos.merge = function(a, b) {
  let sorted = [];

  while(a.length && b.length) {
    if(a[0] < b[0]) {
      sorted.push(a.shift());
    } else {
      sorted.push(b.shift());
    }
  }

  while(a.length) {
    sorted = sorted.concat(a);
    a = [];
  }

  while(b.length) {
    sorted = sorted.concat(b);
    b = [];
  }

  return sorted;
};

algos.binarySearch = function(arr, num) {
  if(!Array.isArray(arr)) return Error;
  if(!arr.length) return false;

  let mid = Math.floor(arr.length/2);

  if(arr[mid] === num) {
    return true;
  }
  if(arr[mid] < num) {
    return algos.binarySearch(arr.slice(mid+1, arr.length), num);
  }
  if(arr[mid] > num) {
    return algos.binarySearch(arr.slice(0, mid), num);
  }
};

algos.iterativeBinarySearch = function(arr, num) {
  if(!Array.isArray(arr)) return Error;

  let newArr = arr;
  let mid = Math.floor(newArr.length/2);

  while(newArr[mid] !== num && newArr.length) {
    if(newArr[mid] < num) {
      newArr = newArr.slice(mid+1, newArr.length);
    }
    if(newArr[mid] > num) {
      newArr = newArr.slice(0, mid);
    }
    mid = Math.floor(newArr.length/2);
  }

  if(!newArr.length) return false;

  return true;
};
