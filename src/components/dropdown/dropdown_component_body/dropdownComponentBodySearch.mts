import { T_ElementAttributes } from '../../../type/type.mjs';
import createElement from '../../ui/createElement.mjs';

const dropdownComponentBodySearch = (id: string) => {
  const inputAttributes: T_ElementAttributes = {
    id,
    type: 'text',
  };
  const inputClass: string[] = ['dropdown-search-input'];

  return createElement('input', inputAttributes, inputClass);
};

export default dropdownComponentBodySearch;
