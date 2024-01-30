import createElement from '../../ui/createElement.mjs';
const dropdownComponentBodySearch = (id) => {
    const inputAttributes = {
        id,
        type: 'text',
    };
    const inputClass = ['dropdown-search-input'];
    return createElement('input', inputAttributes, inputClass);
};
export default dropdownComponentBodySearch;
