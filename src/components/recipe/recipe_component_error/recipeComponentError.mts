import createElement from '../../ui/createElement.mjs';
import SessionStorage from '../../../controllers/SessionStorage.mjs';

const recipeComponentError = () => {
  const divClass: string[] = ['recipes-error'];
  const search = SessionStorage().getSearchAndTags().search as string;
  const divContent = `« Aucune recette ne contient ‘ ${decodeURI(search)} ’ vous pouvez chercher « tarte aux pommes », « poisson », etc.`;

  return createElement('div', undefined, divClass, divContent);
}

export default recipeComponentError;
