// Starting temp is Kelvin
const kelvin = 293;

// Convert to celsius --  Kelvin - 273
const celsius = kelvin - 273;

// Newton scale  --  Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

// Convert to fahrenheit  --  Fahrenheit = Celsius * (9/5) + 32

let fahrenheit = celsius * (9 / 5) + 32;

// Round down
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${kelvin} degrees Kelvin.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${newton} degrees Newton.`);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);