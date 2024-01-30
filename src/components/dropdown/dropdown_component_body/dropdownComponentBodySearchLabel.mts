import createElement from '../../ui/createElement.mjs';
import { T_ElementAttributes } from '../../../type/type.mjs';

const dropdownComponentBodySearchLabel = (id: string) => {
  const imageAttributes: T_ElementAttributes = {
    src: `/public/img/label.svg`,
  };
  const labelAttributes: T_ElementAttributes = {
    for: id,
  };
  const imageClass: string[] = ['dropdown-search-label-img'];
  const labelClass: string[] = ['dropdown-search-label'];

  const imageElement = createElement('img', imageAttributes, imageClass);
  const labelElement = createElement('label', labelAttributes, labelClass);

  labelElement.appendChild(imageElement);

  return labelElement;
};

export default dropdownComponentBodySearchLabel;
