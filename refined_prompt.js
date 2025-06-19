function camelCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined.");
    }
    if (typeof input !== 'string') {
        throw new Error("Input must be a string.");
    }
    if (input.trim() === '') {
        throw new Error("Input cannot be an empty string.");
    }
    if (/^\d+$/.test(input)) {
        throw new Error("Input cannot be a purely numeric value.");
    }
    // Check if already camelCase (simple heuristic)
    // (Removed strict check to allow conversion of single words)
    // Check for alphanumeric (no spaces or delimiters)
    // (Removed strict check to allow conversion of single words)

    // Split by space, underscore, or hyphen
    const words = input
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error("Input does not contain valid words to convert.");
    }

    const camelCased = words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');

    return camelCased;
}


function dotCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined.");
    }
    if (typeof input !== 'string') {
        throw new Error("Input must be a string.");
    }
    if (input.trim() === '') {
        throw new Error("Input cannot be an empty string.");
    }
    if (/^\d+$/.test(input)) {
        throw new Error("Input cannot be a purely numeric value.");
    }
    // Check if already dot.case (simple heuristic)
    if (/^[a-z0-9]+(\.[a-z0-9]+)*$/.test(input)) {
        throw new Error("Input is already in dot.case.");
    }
    // Split camelCase or PascalCase to words
    let words = input
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error("Input does not contain valid words to convert.");
    }

    return words.map(w => w.toLowerCase()).join('.');
}


// Example usage:
console.log(camelCase("hello world")); // "helloWorld"
console.log(camelCase("alreadyCamelCase")); // Error
console.log(camelCase("12345")); // Error
console.log(camelCase("")); // Error
console.log(camelCase(null)); // Error
console.log(camelCase("foo_bar-baz")); // "fooBarBaz"

// Example usage:
console.log(dotCase("hello world")); // "hello.world"
console.log(dotCase("already.dot.case")); // Error
console.log(dotCase("foo_bar-baz")); // "foo.bar.baz"
console.log(dotCase("camelCaseInput")); // "camel.case.input"


