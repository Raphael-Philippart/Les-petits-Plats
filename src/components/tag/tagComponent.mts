import { T_ElementAttributes } from '../../type/type.mjs';
import createElement from '../ui/createElement.mjs';
import SessionStorage from '../../controllers/SessionStorage.mjs';
import Interface from '../../views/Interface.mjs';

const tagComponent = (tag: string) => {
  const divAttributes: T_ElementAttributes = {
    ariaLabel: 'Fermer le Tag',
  };
  const closeImageAttributes: T_ElementAttributes = {
    src: `public/img/reset.svg`,
  };
  const divClass: string[] = ['tag'];
  const pClass: string[] = ['tag-text'];
  const closeClass: string[] = ['tag-close'];
  const pContent: string = tag;

  const divElement: HTMLElement = createElement('div', divAttributes, divClass);
  const pElement: HTMLElement = createElement('p', undefined, pClass, pContent);
  const divCloseElement: HTMLElement = createElement('div', undefined, closeClass);
  const imageElement = createElement('img', closeImageAttributes);

  divElement.appendChild(pElement);
  divCloseElement.appendChild(imageElement);
  divElement.appendChild(divCloseElement);

  (() => {
    divElement.addEventListener('click', () => {
      SessionStorage().removeTag(tag);
      Interface();
    })
  })()

  return divElement;
};

export default tagComponent;
