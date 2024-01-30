import {
  T_SearchInSessionStorage,
  T_SearchSessionStorage,
  T_SessionStorage,
  T_TagInSessionStorage,
} from '../type/type.mjs';
import secureValue from '../utils/secureValue.mjs';

/**
 * Get methods related to search and tags in sessionStorage.
 * @returns {{
 *   removeSearchAndTags: () => void,
 *   getSearchAndTags: () => T_SearchSessionStorage,
 *   saveSearchAndTags: (search?: T_SearchInSessionStorage, tags?: T_TagInSessionStorage) => void,
 *   isTagInList: (tag: string) => boolean,
 *   removeSearch: () => void,
 *   removeTag: (tag: string) => void
 * }}
 */
const SessionStorage = (): T_SessionStorage => {
  /**
   * Constant representing the key for search and tags data in sessionStorage.
   * @constant {string} SESSION_STORAGE_KEY
   */
  const SESSION_STORAGE_KEY: string = 'searchAndTags';

  /**
   * Removes the search and tags values from sessionStorage.
   */
  const removeSearchAndTags = (): void => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  };

  /**
   * Retrieves the search and tags values from sessionStorage.
   * @returns {T_SearchSessionStorage} - The retrieved search and tags values.
   */
  const getSearchAndTags = (): T_SearchSessionStorage => {
    const storedData: string | null = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : {};
  };

  /**
   * Sets the search and tags values in sessionStorage.
   * @param {T_SearchInSessionStorage} search - The search string to set.
   * @param {T_TagInSessionStorage} tags - The tags to set, either a string or an array of strings.
   */
  const saveSearchAndTags = (
    search?: T_SearchInSessionStorage,
    tags?: T_TagInSessionStorage,
  ): void => {
    // Retrieve current data from sessionStorage
    const storedData: T_SearchSessionStorage = getSearchAndTags();

    // Update Search if provided
    if (search !== undefined) {
      storedData.search = secureValue(search);
    }

    // Update Tags if provided
    if (tags !== undefined) {
      // Ensure tags is an array
      const newTags: string[] = Array.isArray(tags) ? tags : [tags];

      // Remove duplicates and merge with existing tags
      storedData.tags = Array.from(new Set([...(storedData.tags || []), ...newTags]));
    }

    // Store the updated data in sessionStorage
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(storedData));
  };

  /**
   * Check if a specific tag is present in the list of tags.
   * @param {string} tag - The tag to check.
   * @returns {boolean} - True if the tag is present, false otherwise.
   */
  const isTagInList = (tag: string): boolean => {
    const storedData: T_SearchSessionStorage = getSearchAndTags();

    if (Array.isArray(storedData.tags)) {
      return storedData.tags.includes(tag);
    }

    return false;
  };

  /**
   * Removes the search value from sessionStorage.
   */
  const removeSearch = (): void => {
    const storedData: T_SearchSessionStorage = getSearchAndTags();
    delete storedData.search;
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(storedData));
  };

  /**
   * Removes a specific tag from sessionStorage.
   * @param {string} tag - The tag to remove.
   */
  const removeTag = (tag: string): void => {
    const storedData: T_SearchSessionStorage = getSearchAndTags();
    if (Array.isArray(storedData.tags)) {
      storedData.tags = storedData.tags.filter((existingTag: string): boolean => existingTag !== tag);
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(storedData));
    }
  };

  return {
    removeSearchAndTags,
    getSearchAndTags,
    saveSearchAndTags,
    isTagInList,
    removeSearch,
    removeTag,
  };
};

export default SessionStorage;
