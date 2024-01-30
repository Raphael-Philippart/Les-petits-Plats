import { T_ElementAttributes } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';

const dropdownComponentBody = (id: string) => {
  const divBodyAttributes: T_ElementAttributes = {
    role: 'menu',
    ariaLabelledby: id,
  };

  const divBodyClass: string[] = ['dropdown-option', 'hidden'];

  return createElement('div', divBodyAttributes, divBodyClass);
}

export default dropdownComponentBody;
