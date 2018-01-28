var a=[];
for(var i =1;i<=100;i++){
  var b=0;
  for(var j=1;j<=i;j++){
    if(i%j===0&&i!==1){
      b++;
    }
  }
  if(b===2){
    a.push(i);
    b=0;
  }
}
console.log(a.join(' '));