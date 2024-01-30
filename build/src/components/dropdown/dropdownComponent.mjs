import createDivContainer from '../ui/createDivContainer.mjs';
import removeChild from '../../utils/removeChild.mjs';
import searchOptions from '../../utils/searchOptions.mjs';
import dropdownComponentHeader from './dropdown_component_header/dropdownComponentHeader.mjs';
import dropdownComponentHeaderArrow from './dropdown_component_header/dropdownComponentHeaderArrow.mjs';
import dropdownComponentBody from './dropdown_component_body/dropdownComponentBody.mjs';
import dropdownComponentBodySearch from './dropdown_component_body/dropdownComponentBodySearch.mjs';
import dropdownComponentBodyContent from './dropdown_component_body/dropdownComponentBodyContent.mjs';
import dropdownComponentBodySearchLabel from './dropdown_component_body/dropdownComponentBodySearchLabel.mjs';
import dropdownComponentBodySearchReset from './dropdown_component_body/dropdownComponentBodySearchReset.mjs';
const dropdownComponent = (options) => {
    let dropdownState = false;
    const idButton = `dropdown-${options.title.toLowerCase()}-button`;
    const idLabel = `dropdown-${options.title.toLowerCase()}-label`;
    const divAttributes = {
        ariaHaspopup: 'true',
        ariaExpanded: 'false',
    };
    const divClass = ['dropdown'];
    const divBodySearchClass = ['dropdown-search'];
    const divElement = createDivContainer(divAttributes, divClass);
    const divHeaderElement = dropdownComponentHeader(idButton, options.title);
    const divHeaderArrow = dropdownComponentHeaderArrow();
    const divBody = dropdownComponentBody(idButton);
    const divBodySearch = createDivContainer(undefined, divBodySearchClass);
    const inputSearch = dropdownComponentBodySearch(idLabel);
    const labelElement = dropdownComponentBodySearchLabel(idLabel);
    const resetElement = dropdownComponentBodySearchReset();
    const divBodyContent = dropdownComponentBodyContent(options.data);
    divHeaderElement.appendChild(divHeaderArrow);
    divElement.appendChild(divHeaderElement);
    divBodySearch.appendChild(inputSearch);
    divBodySearch.appendChild(labelElement);
    divBody.appendChild(divBodySearch);
    divBody.appendChild(divBodyContent);
    divElement.appendChild(divBody);
    (() => {
        divHeaderElement.addEventListener('click', () => {
            dropdownState = !dropdownState;
            divBody.classList.toggle('hidden');
            divHeaderElement.classList.toggle('dropdown-rounded-open');
            divHeaderElement.classList.toggle('dropdown-rounded-close');
            divHeaderArrow.classList.toggle('dropdown-arrow');
            divHeaderArrow.classList.toggle('dropdown-arrow-open');
            if (dropdownState) {
                inputSearch.focus();
                divHeaderElement.setAttribute('aria-expanded', 'true');
                divElement.setAttribute('aria-expanded', 'true');
            }
            if (!dropdownState) {
                divHeaderElement.setAttribute('aria-expanded', 'false');
                divElement.setAttribute('aria-expanded', 'false');
            }
        });
        inputSearch.addEventListener('keyup', () => {
            const searchOptionsResult = searchOptions(inputSearch.value, options.data);
            removeChild(divBodyContent);
            resetElement.remove();
            divBodySearch.appendChild(resetElement);
            divBodyContent.appendChild(dropdownComponentBodyContent(searchOptionsResult));
            if (inputSearch.value === '')
                resetElement.remove();
        });
        resetElement.addEventListener('click', () => {
            inputSearch.value = '';
            divBodySearch.appendChild(resetElement);
            divBodyContent.appendChild(dropdownComponentBodyContent(options.data));
            resetElement.remove();
        });
    })();
    return divElement;
};
export default dropdownComponent;
