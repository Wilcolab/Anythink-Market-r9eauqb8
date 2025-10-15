function toKebabCase(input) {
    if (typeof input !== 'string' || !input.trim()) {
        throw new Error('Input must be a non-empty string.');
    }

    // Replace underscores and multiple spaces with a single space
    let str = input.replace(/[_\s]+/g, ' ').trim();

    // Insert space before uppercase letters (for camelCase and PascalCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Split by spaces, filter out empty, join with hyphens, and lowercase
    return str
        .split(' ')
        .filter(Boolean)
        .join('-')
        .toLowerCase();
}

// Example usage:
// console.log(toKebabCase("HelloWorld")); // "hello-world"
// console.log(toKebabCase("snake_case_text")); // "snake-case-text"
// console.log(toKebabCase(" multiple   spaces ")); // "multiple-spaces"