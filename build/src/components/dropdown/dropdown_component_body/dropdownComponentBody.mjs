import createElement from '../../ui/createElement.mjs';
const dropdownComponentBody = (id) => {
    const divBodyAttributes = {
        role: 'menu',
        ariaLabelledby: id,
    };
    const divBodyClass = ['dropdown-option', 'hidden'];
    return createElement('div', divBodyAttributes, divBodyClass);
};
export default dropdownComponentBody;
