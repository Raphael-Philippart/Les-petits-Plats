import createElement from '../../ui/createElement.mjs';
const dropdownComponentHeader = (id, title) => {
    const buttonAttributes = {
        id,
        role: 'menuitem',
        ariaHaspopup: 'true',
        ariaExpanded: 'false',
        ariaControls: `dropdown-${title.toLowerCase()}`,
        ariaLabel: `${title} options`,
    };
    const buttonClass = ['dropdown-button', 'dropdown-rounded-close'];
    const textContent = `${title}`;
    const buttonElement = createElement('button', buttonAttributes, buttonClass);
    const textElement = createElement('p', undefined, undefined, textContent);
    buttonElement.appendChild(textElement);
    return buttonElement;
};
export default dropdownComponentHeader;
