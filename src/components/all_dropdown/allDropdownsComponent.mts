import { T_DropdownOptions } from '../../type/type.mjs';
import removeChild from '../../utils/removeChild.mjs';
import dropdownComponent from '../dropdown/dropdownComponent.mjs';

const allDropdownsComponent = (dropdowns: T_DropdownOptions): void => {
  const sectionDropdowns = document.querySelector('#dropdowns') as HTMLDivElement;

  removeChild(sectionDropdowns);

  sectionDropdowns.appendChild(dropdownComponent(dropdowns.ingredients));
  sectionDropdowns.appendChild(dropdownComponent(dropdowns.appliances));
  sectionDropdowns.appendChild(dropdownComponent(dropdowns.ustensils));
};

export default allDropdownsComponent;
