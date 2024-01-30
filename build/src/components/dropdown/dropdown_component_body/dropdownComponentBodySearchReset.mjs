import createElement from '../../ui/createElement.mjs';
const dropdownComponentBodySearchReset = () => {
    const imageAttributes = {
        src: `/public/img/reset.svg`,
    };
    const imageClass = ['dropdown-search-reset-img'];
    const resetClass = ['dropdown-search-reset'];
    const resetElement = createElement('p', undefined, resetClass);
    const imageElement = createElement('img', imageAttributes, imageClass);
    resetElement.appendChild(imageElement);
    return resetElement;
};
export default dropdownComponentBodySearchReset;
