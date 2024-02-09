import { T_ElementAttributes, T_SessionStorage } from '../type/type.mjs';
import SessionStorage from './SessionStorage.mjs';
import Interface from '../views/Interface.mjs';
import createElement from '../components/ui/createElement.mjs';
import removeChild from '../utils/removeChild.mjs';

const SearchEvent = (): void => {
  const searchForm = document.querySelector('#searchForm') as HTMLFormElement;
  const searchInput = document.querySelector('#searchInput') as HTMLInputElement;
  const searchLabel = document.querySelector('#searchLabel') as HTMLLabelElement;
  const search: T_SessionStorage = SessionStorage();

  searchForm.addEventListener('submit', (evt: SubmitEvent) => {
    evt.preventDefault();
    labelImageEvent(searchLabel);
  });

  searchInput.addEventListener('keyup', () => {
    if (searchInput.value === '') {
      search.removeSearchAndTags();
      Interface();
    } else if (searchInput.value.length >= 3) {
      const secureSearch = searchInput.value;
      search.saveSearchAndTags(secureSearch);
      labelImageEvent(searchLabel);
      Interface();
    }
  });

  searchLabel.addEventListener('click', () => {
    labelImageEvent(searchLabel);
  });

  searchLabel.appendChild(labelImage(false));
  searchInput.value = search.getSearchAndTags().search ? search.getSearchAndTags().search as string : '';
};

const labelImageEvent = (searchLabel: HTMLLabelElement) => {
  removeChild(searchLabel);
  searchLabel.appendChild(labelImage(true));

  setTimeout(() => {
    removeChild(searchLabel);
    searchLabel.appendChild(labelImage(false));
  }, 250);
};

const labelImage = (active: boolean) => {
  const imageAttributes: T_ElementAttributes = {
    alt: `Soumettre la recherche`,
  };
  const imageDefaultAttributes: T_ElementAttributes = {
    src: `public/img/default-label.svg`,
    ...imageAttributes,
  };
  const imageActiveAttributes: T_ElementAttributes = {
    src: `public/img/active-label.svg`,
    ...imageAttributes,
  };
  const imageClass: string[] = ['label-submit-img'];

  const spanElement: HTMLSpanElement = createElement('span', undefined);

  spanElement.appendChild(createElement('img', active ? imageActiveAttributes : imageDefaultAttributes, imageClass));
  return spanElement;
};

export default SearchEvent;
