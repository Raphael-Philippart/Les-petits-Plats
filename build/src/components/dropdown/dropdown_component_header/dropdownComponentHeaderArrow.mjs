import createElement from '../../ui/createElement.mjs';
const dropdownComponentHeaderArrow = () => {
    const imageAttributes = {
        src: `public/img/arrow.svg`,
    };
    const arrowClass = ['dropdown-arrow'];
    const imageElement = createElement('img', imageAttributes);
    const arrowElement = createElement('div', undefined, arrowClass);
    arrowElement.appendChild(imageElement);
    return arrowElement;
};
export default dropdownComponentHeaderArrow;
