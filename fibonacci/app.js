var a = [];
while ((isNaN(a[a.length-2]+a[a.length-1])?0:(a[a.length-2]+a[a.length-1]))<100) {
  a.push((isNaN(a[a.length-2]+a[a.length-1])?1:(a[a.length-2]+a[a.length-1])));
}
console.log(a);