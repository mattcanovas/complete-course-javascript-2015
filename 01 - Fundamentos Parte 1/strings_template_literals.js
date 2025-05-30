const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const BREAK_LINE = '\n';

const presentationLiterals = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log("Literals: " + presentationLiterals + BREAK_LINE);
const presentationString = 'I\'m ' + firstName + ', \n\ a ' + (year - birthYear) + ' years old ' + job + '!';
console.log("Regular string: " + presentationString + BREAK_LINE);
const presentationTemplate = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(`Template ${presentationTemplate} ${BREAK_LINE}`);