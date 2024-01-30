import SessionStorage from '../../../controllers/SessionStorage.mjs';
import createDivContainer from '../../ui/createDivContainer.mjs';
import createElement from '../../ui/createElement.mjs';
import dropdownComponentBodyContentItem from './dropdownComponentBodyContentItem.mjs';

const dropdownComponentBodyContent = (options: string[]) => {
  const divClass: string[] = ['dropdown-list-container'];
  const divElement: HTMLDivElement = createDivContainer(undefined, divClass);

  const listClassSelected: string[] = ['dropdown-list', 'selected'];
  const listElementSelected: HTMLUListElement = createElement('ul', undefined, listClassSelected);

  const listClassUnSelected: string[] = ['dropdown-list'];
  const listElementUnSelected: HTMLUListElement = createElement('ul', undefined, listClassUnSelected);

  const sortOptions: string[] = options.sort((a: string, b: string) => {
    return a.localeCompare(b, 'fr');
  });

  sortOptions.forEach(option => {
    const isSelected: boolean = SessionStorage().isTagInList(option);
    if (isSelected) listElementSelected.appendChild(dropdownComponentBodyContentItem(option, isSelected));
    if (!isSelected) listElementUnSelected.appendChild(dropdownComponentBodyContentItem(option, isSelected));
  });

  if (listElementSelected.childNodes.length > 0) divElement.appendChild(listElementSelected);
  divElement.appendChild(listElementUnSelected);

  return divElement;
}

export default dropdownComponentBodyContent;
