const removeSpaces = str => str.replace(/\s/g, '');

const stringWithSpaces = 'Hello, world! This is a string with spaces.';
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); 
