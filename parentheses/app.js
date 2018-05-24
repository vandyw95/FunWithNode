var arr = ['()()[]{}', '{[()]}', '{{[[()}}]]', '[](){}{{((}}))', '{{(([[]]))}}'];
var openBrace = {
  '(': ')',
  '[': ']',
  '{': '}'
};
var closeBrace = {
  ')': true,
  ']': true,
  '}': true
};
arr.forEach(el => {
  for (x in el) {
    console.log(x);
  }
});
