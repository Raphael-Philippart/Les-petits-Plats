import createElement from './createElement.mjs';
/**
 * Creates a <div> container with specific attributes.
 *
 * @param {T_ElementAttributes} [attributes] - The attributes to set on the container.
 * @param {string[]} [className=[]] - The CSS classes to add to the container.
 * @param {string} [content] - The content to add to the container.
 * @returns {HTMLDivElement} - The created <div> container.
 */
const createDivContainer = (attributes, className, content) => {
    return createElement('div', attributes, className, content);
};
export default createDivContainer;
