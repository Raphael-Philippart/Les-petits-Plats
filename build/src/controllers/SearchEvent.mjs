import SessionStorage from './SessionStorage.mjs';
import Interface from '../views/Interface.mjs';
import createElement from '../components/ui/createElement.mjs';
import removeChild from '../utils/removeChild.mjs';
const SearchEvent = () => {
    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchInput');
    const searchLabel = document.querySelector('#searchLabel');
    const search = SessionStorage();
    searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        labelImageEvent(searchLabel);
    });
    searchInput.addEventListener('keyup', () => {
        if (searchInput.value === '') {
            search.removeSearch();
            Interface();
        }
        else if (searchInput.value.length >= 3) {
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
    searchInput.value = search.getSearchAndTags().search ? search.getSearchAndTags().search : '';
};
const labelImageEvent = (searchLabel) => {
    removeChild(searchLabel);
    searchLabel.appendChild(labelImage(true));
    setTimeout(() => {
        removeChild(searchLabel);
        searchLabel.appendChild(labelImage(false));
    }, 250);
};
const labelImage = (active) => {
    const imageAttributes = {
        alt: `Soumettre la recherche`,
    };
    const imageDefaultAttributes = {
        src: `public/img/default-label.svg`,
        ...imageAttributes,
    };
    const imageActiveAttributes = {
        src: `public/img/active-label.svg`,
        ...imageAttributes,
    };
    const imageClass = ['label-submit-img'];
    const spanElement = createElement('span', undefined);
    spanElement.appendChild(createElement('img', active ? imageActiveAttributes : imageDefaultAttributes, imageClass));
    return spanElement;
};
export default SearchEvent;
