import { T_ElementAttributes } from '../../type/type.mjs';
import createElement from '../ui/createElement.mjs';

const lengthComponent = (length: number): HTMLDivElement => {
  const divAttributes: T_ElementAttributes = {};
  const divClass: string[] = ['dropdown-length'];
  const divContent: string = `${length} Recette${length === 1 ? '' : 's'}`;

  return createElement('div', divAttributes, divClass, divContent);
};

export default lengthComponent;
