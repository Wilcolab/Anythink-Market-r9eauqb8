/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, underscores, or hyphens, then lowercases the first word
 * and capitalizes the first letter of each subsequent word. Trims leading/trailing whitespace.
 *
 * @param {string} input - The string to convert to camelCase.
 * @throws {TypeError} If the input is not a non-null string.
 * @throws {Error} If the input string is empty after trimming.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase("hello world"); // "helloWorld"
 * toCamelCase(" snake_case_example "); // "snakeCaseExample"
 * toCamelCase("AlreadyCamelCase"); // "alreadyCamelCase"
 */

/**
 * Converts a given string to dot.case format.
 *
 * Splits the input string by spaces, underscores, hyphens, or camelCase boundaries,
 * lowercases all words, and joins them with dots. Trims leading/trailing whitespace.
 *
 * @param {string} input - The string to convert to dot.case.
 * @throws {TypeError} If the input is not a non-null string.
 * @throws {Error} If the input string is empty after trimming.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase("hello world"); // "hello.world"
 * toDotCase("snake_case_example"); // "snake.case.example"
 * toDotCase("AlreadyCamelCase"); // "already.camel.case"
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new TypeError('Input must be a non-null string');
    }
    const str = input.trim();
    if (str.length === 0) {
        throw new Error('Input string is empty after trimming');
    }
    // Split by space, underscore, or hyphen (one or more)
    const words = str.split(/[\s_-]+/);
    // Lowercase first word, capitalize others
    return words
        .map((word, idx) => {
            if (idx === 0) return word.charAt(0).toLowerCase() + word.slice(1);
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase(" snake_case_example ")); // "snakeCaseExample"
// console.log(toCamelCase("AlreadyCamelCase")); // "alreadyCamelCase"

function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new TypeError('Input must be a non-null string');
    }
    const str = input.trim();
    if (str.length === 0) {
        throw new Error('Input string is empty after trimming');
    }
    // Split by space, underscore, hyphen, or camelCase boundaries
    const words = str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .split(/[\s_-]+/)
        .map(word => word.toLowerCase());
    return words.join('.');
}

// Example usage:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase("snake_case_example")); // "snake.case.example"
// console.log(toDotCase("AlreadyCamelCase")); // "already.camel.case"

