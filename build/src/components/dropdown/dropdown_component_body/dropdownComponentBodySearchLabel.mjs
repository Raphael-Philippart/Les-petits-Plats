import createElement from '../../ui/createElement.mjs';
const dropdownComponentBodySearchLabel = (id) => {
    const imageAttributes = {
        src: `/public/img/label.svg`,
    };
    const labelAttributes = {
        for: id,
    };
    const imageClass = ['dropdown-search-label-img'];
    const labelClass = ['dropdown-search-label'];
    const imageElement = createElement('img', imageAttributes, imageClass);
    const labelElement = createElement('label', labelAttributes, labelClass);
    labelElement.appendChild(imageElement);
    return labelElement;
};
export default dropdownComponentBodySearchLabel;
