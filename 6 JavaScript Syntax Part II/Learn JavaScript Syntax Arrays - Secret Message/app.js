let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'program');

const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,5, 'know');

// console.log(secretMessage);

console.log(secretMessage.join(' '));