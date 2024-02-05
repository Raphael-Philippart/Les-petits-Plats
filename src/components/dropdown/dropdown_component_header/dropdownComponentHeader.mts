import { T_ElementAttributes } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';

const dropdownComponentHeader = (id: string, title: string) => {
  const buttonAttributes: T_ElementAttributes = {
    id,
    role: 'menu',
    ariaHaspopup: 'true',
    ariaExpanded: 'false',
    ariaControls: `dropdown-${title.toLowerCase()}`,
    ariaLabel: `${title} options`,
  };
  const buttonClass: string[] = ['dropdown-button', 'dropdown-rounded-close'];
  const textContent: string = `${title}`;

  const buttonElement = createElement('button', buttonAttributes, buttonClass);
  const textElement = createElement('p', undefined, undefined, textContent);

  buttonElement.appendChild(textElement);

  return buttonElement;
}

export default dropdownComponentHeader;
