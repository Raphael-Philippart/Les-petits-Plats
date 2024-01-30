import removeChild from '../../utils/removeChild.mjs';
import SessionStorage from '../../controllers/SessionStorage.mjs';
import tagComponent from '../tag/tagComponent.mjs';

const allTagsComponent = () => {
  const sectionTags = document.querySelector('#tags') as HTMLElement;
  const tags = SessionStorage().getSearchAndTags().tags;

  removeChild(sectionTags);

  if (tags && tags!.length > 0)
    for (const tag of tags!) sectionTags.appendChild(tagComponent(tag));
}

export default allTagsComponent;
