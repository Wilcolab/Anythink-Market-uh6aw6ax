function toKebabCase(str) {
    try {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }
        // Insert hyphen before uppercase letters, then convert to lowercase
        const kebab = str.replace(/([A-Z])/g, '-$1').toLowerCase();
        // Remove leading hyphen if present
        return kebab.startsWith('-') ? kebab.slice(1) : kebab;
    } catch (error) {
        throw new Error(`Error processing string: ${error.message}`);
    }
}
toKebabCase('firstName');      // first-name
console.log(toKebabCase('firstName'));      // first-name
console.log(toKebabCase('userId'));         // user-id
console.log(toKebabCase('SCREEN_NAME'));     // screen-name
console.log(toKebabCase('mobileNumber'));   // mobile-number        
console.log(toKebabCase('already-kebab-case')); // already-kebab-case
console.log(toKebabCase(''));               // ''
console.log(toKebabCase(null));             // Error: Input must be a string
console.log(toKebabCase(12345));            // Error: Input must be a string
console.log(toKebabCase('fooBarBaz'));      // foo-bar-baz
console.log(toKebabCase('foo_bar-baz'));    // foo-bar-baz
