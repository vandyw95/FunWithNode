var a = [6, 5, 3, 1, 8, 7, 2, 4, 9, 22, 12, 18, 17, 19, 13, 14, 25, 29, 21, 23, 44, 55, 42, 78, 11, 31, 39, 51, 20];
var arrLen;
function heapRoot(input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  if (left < arrLen && input[left] > input[max]) {
    max = left;
  }
  if (right < arrLen && input[right] > input[max]) {
    max = right;
  }
  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}
function swap (input, a, b) {
  let temp = input[a];
  input[a] = input[b];
  input[b] = temp;
}
function heapSort(x) {
  arrLen = x.length;
  for (let i = Math.floor(arrLen / 2); i >= 0; i -= 1) {
    heapRoot(x, i);
  }
  for (let i = x.length - 1; i > 0; i--) {
    swap(x, 0, i);
    arrLen--;
    heapRoot(x, 0);
  }
}
heapSort(a);
console.log(a);
