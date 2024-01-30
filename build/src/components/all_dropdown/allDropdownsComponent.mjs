import removeChild from '../../utils/removeChild.mjs';
import dropdownComponent from '../dropdown/dropdownComponent.mjs';
const allDropdownsComponent = (dropdowns) => {
    const sectionDropdowns = document.querySelector('#dropdowns');
    removeChild(sectionDropdowns);
    sectionDropdowns.appendChild(dropdownComponent(dropdowns.ingredients));
    sectionDropdowns.appendChild(dropdownComponent(dropdowns.appliances));
    sectionDropdowns.appendChild(dropdownComponent(dropdowns.ustensils));
};
export default allDropdownsComponent;
