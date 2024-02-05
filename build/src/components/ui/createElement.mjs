/**
 * Creates an HTML element with specified attributes, classes, and content.
 *
 * @template T - The type of HTML tag.
 * @param {T} tagName - The HTML tag to create.
 * @param {T_ElementAttributes} [attributes] - The attributes to set on the element.
 * @param {string[]} [className=[]] - The CSS classes to add to the element.
 * @param {string} [content] - The content to add to the element.
 * @returns {HTMLElementTagNameMap[T]} - The created HTML element.
 */
const createElement = (tagName, attributes, className, content) => {
    const element = document.createElement(tagName);
    // Set attributes
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            if (value !== undefined) {
                // Convert camelCase to kebab-case for ARIA attributes
                const attributeName = key.startsWith('aria') ? key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() : key;
                element.setAttribute(attributeName, value.toString());
            }
        }
    }
    // Set classes if provided
    if (className && className.length > 0) {
        element.classList.add(...className);
    }
    // Set content if provided
    if (content) {
        element.textContent = content;
    }
    return element;
};
export default createElement;
