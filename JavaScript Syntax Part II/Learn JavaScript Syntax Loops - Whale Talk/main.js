let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [ ];

for (let i = 0; i < input.length; i++) {
  //console.log("inputIndex = " + input[i]);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      } else if (input[i] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

//console.log(resultArray);
console.log(resultArray.join('').toUpperCase());