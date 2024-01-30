import createElement from '../../ui/createElement.mjs';
import SessionStorage from '../../../controllers/SessionStorage.mjs';
import Interface from '../../../views/Interface.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
const dropdownComponentBodyContentItem = (option, isSelected) => {
    const itemAttributes = {
        role: 'item',
        tabindex: '-1',
    };
    const divClass = ['dropdown-list-item'];
    const paragraphContent = `${option.charAt(0).toUpperCase() + option.slice(1)}`;
    const divElement = createDivContainer(undefined, divClass);
    const itemElement = createElement('li', itemAttributes, undefined);
    const paragraphElement = createElement('p', undefined, undefined, paragraphContent);
    divElement.addEventListener('click', () => {
        SessionStorage().saveSearchAndTags(undefined, [option]);
        Interface();
    });
    if (isSelected) {
        divElement.addEventListener('click', () => {
            SessionStorage().removeTag(option);
            Interface();
        });
    }
    itemElement.appendChild(paragraphElement);
    divElement.appendChild(itemElement);
    return divElement;
};
export default dropdownComponentBodyContentItem;
