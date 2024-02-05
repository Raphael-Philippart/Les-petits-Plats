import createElement from '../ui/createElement.mjs';
const lengthComponent = (length) => {
    const divAttributes = {};
    const divClass = ['dropdown-length'];
    const divContent = `${length} Recette${length === 1 ? '' : 's'}`;
    return createElement('div', divAttributes, divClass, divContent);
};
export default lengthComponent;
