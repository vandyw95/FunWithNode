// this.disabledDateTo.to = val.setDate(val.getDate() + 2);
var a = new Date();
var c = new Date();
var b = new Date(c.setDate(c.getDate() + 14));
var red = b.valueOf() - a.valueOf();
console.log(c);
console.log(b);
console.log(b.valueOf() < c.valueOf() ? true : false);
// a.setDate(a.getDate() + 14);
// console.log(a+1);
// console.log(a.setDate(a.getDate() + 10));
// console.log(a.getDate()-b.getDate());
