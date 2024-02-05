import SessionStorage from '../../../controllers/SessionStorage.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
import createElement from '../../ui/createElement.mjs';
import dropdownComponentBodyContentItem from './dropdownComponentBodyContentItem.mjs';
const dropdownComponentBodyContent = (options) => {
    const divClass = ['dropdown-list-container'];
    const divElement = createDivContainer(undefined, divClass);
    const listClassSelected = ['dropdown-list', 'selected'];
    const listElementSelected = createElement('ul', undefined, listClassSelected);
    const listClassUnSelected = ['dropdown-list'];
    const listElementUnSelected = createElement('ul', undefined, listClassUnSelected);
    const sortOptions = options.sort((a, b) => {
        return a.localeCompare(b, 'fr');
    });
    sortOptions.forEach(option => {
        const isSelected = SessionStorage().isTagInList(option);
        if (isSelected)
            listElementSelected.appendChild(dropdownComponentBodyContentItem(option, isSelected));
        if (!isSelected)
            listElementUnSelected.appendChild(dropdownComponentBodyContentItem(option, isSelected));
    });
    if (listElementSelected.childNodes.length > 0)
        divElement.appendChild(listElementSelected);
    divElement.appendChild(listElementUnSelected);
    return divElement;
};
export default dropdownComponentBodyContent;
