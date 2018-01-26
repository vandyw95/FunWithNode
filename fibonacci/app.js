console.log("1st Version");
var a = [];
while ((isNaN(a[a.length-2]+a[a.length-1])?0:(a[a.length-2]+a[a.length-1]))<100) {
  a.push((isNaN(a[a.length-2]+a[a.length-1])?1:(a[a.length-2]+a[a.length-1])));
}
console.log(a);

console.log("2nd Version");
var b =1;
var c =1;
var d;
console.log(b);
console.log(c);
while(b+c<100){
  d=b+c;
  b=c;
  c=d;
  console.log(d);
}

console.log("3rd Version");
var e =[1,1];
while((e[e.length-1]+e[e.length-2])<100){
  e.push((e[e.length-1]+e[e.length-2]));
}
console.log(e);