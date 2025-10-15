function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]+$/, s => s.toLowerCase())
        .replace(/^[A-Z]/, s => s.toLowerCase());
}

// Examples:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));         // userId
// console.log(toCamelCase('SCREEN_NAME'));     // screenName
// console.log(toCamelCase('mobile-number'));   // mobileNumber

function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both inputs must be defined and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both inputs must be valid numbers.');
    }
    return a + b;
}

// Examples:
// console.log(addNumbers(5, 3));      // 8
// addNumbers('5', 3);                 // Throws error
// addNumbers(null, 3);                // Throws error
