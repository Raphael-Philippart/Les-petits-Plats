/**
 * Secure input by encoding special characters.
 * @param {string} input - The input string to be secured.
 * @returns {string} - The secured input string.
 */
const secureValue = (input) => {
    // Split the input string into an array of characters
    const chars = input.split('');
    // Map over each character in the array
    const securedChars = chars.map(char => {
        // Encode special characters, excluding spaces
        if (/[^a-zA-Z0-9]/.test(char) && char !== ' ') {
            // Use encodeURIComponent to encode the character and replace %20 with '+'
            return encodeURIComponent(char).replace(/%20/g, '+');
        }
        // If the character is not a special character or space, keep it unchanged
        return char;
    });
    // Join the secured characters back into a string
    return securedChars.join('');
};
export default secureValue;
