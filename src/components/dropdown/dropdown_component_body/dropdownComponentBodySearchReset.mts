import createElement from '../../ui/createElement.mjs';
import { T_ElementAttributes } from '../../../type/type.mjs';

const dropdownComponentBodySearchReset = () => {
  const imageAttributes: T_ElementAttributes = {
    src: `public/img/reset.svg`,
  };
  const imageClass: string[] = ['dropdown-search-reset-img'];
  const resetClass: string[] = ['dropdown-search-reset'];

  const resetElement = createElement('p', undefined, resetClass);
  const imageElement = createElement('img', imageAttributes, imageClass);

  resetElement.appendChild(imageElement);

  return resetElement;
};

export default dropdownComponentBodySearchReset;
