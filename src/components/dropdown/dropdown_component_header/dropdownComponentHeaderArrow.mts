import { T_ElementAttributes } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';

const dropdownComponentHeaderArrow = () => {
  const imageAttributes: T_ElementAttributes = {
    src: `public/img/arrow.svg`,
    alt: 'Dropdown'
  };
  const arrowClass: string[] = ['dropdown-arrow'];

  const imageElement = createElement('img', imageAttributes);
  const arrowElement = createElement('div', undefined, arrowClass);

  arrowElement.appendChild(imageElement);
  return arrowElement;
}

export default dropdownComponentHeaderArrow;
