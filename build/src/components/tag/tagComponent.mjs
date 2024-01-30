import createElement from '../ui/createElement.mjs';
import SessionStorage from '../../controllers/SessionStorage.mjs';
import Interface from '../../views/Interface.mjs';
const tagComponent = (tag) => {
    const divAttributes = {
        ariaLabel: 'Fermer le Tag',
    };
    const closeImageAttributes = {
        src: `/public/img/reset.svg`,
    };
    const divClass = ['tag'];
    const pClass = ['tag-text'];
    const closeClass = ['tag-close'];
    const pContent = tag;
    const divElement = createElement('div', divAttributes, divClass);
    const pElement = createElement('p', undefined, pClass, pContent);
    const divCloseElement = createElement('div', undefined, closeClass);
    const imageElement = createElement('img', closeImageAttributes);
    divElement.appendChild(pElement);
    divCloseElement.appendChild(imageElement);
    divElement.appendChild(divCloseElement);
    (() => {
        divElement.addEventListener('click', () => {
            SessionStorage().removeTag(tag);
            Interface();
        });
    })();
    return divElement;
};
export default tagComponent;
