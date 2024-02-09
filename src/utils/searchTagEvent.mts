import SessionStorage from '../controllers/SessionStorage.mjs';

const SearchTagEvent = (dropdowns: any) => {
  const search = SessionStorage().getSearchAndTags().search;
  let smallestMatch: string | any[] | null = null;

  for (const key in dropdowns) {
    if (dropdowns.hasOwnProperty(key)) {
      const options = dropdowns[key];
      options.data.forEach((option: any) => {
        if (option.includes(search)) {
          if (!smallestMatch || option.length < smallestMatch.length) {
            smallestMatch = option;
          }
        }
      });
    }
  }

  if (smallestMatch) SessionStorage().saveSearchAndTags(undefined, smallestMatch);
  return smallestMatch;
};

export default SearchTagEvent;
