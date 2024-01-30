/**
 * Represents the attributes for an HTML element.
 * @type {Object.<string, string | number | (() => void) | undefined>}
 */
export type T_ElementAttributes = {
  id?: string;
  for?: string;
  class?: string;
  type?: string;
  role?: string;
  tabindex?: number | string;
  href?: string;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaControls?: string;
  ariaHidden?: 'true' | 'false';
  ariaHaspopup?: 'true' | 'false';
  ariaExpanded?: 'true' | 'false';
};

/**
 * Represents the ingredients for a recipe.
 * @type {Object}
 */
export type T_Ingredients = {
  ingredient: string;
  quantity?: number;
  unit?: string;
};

/**
 * Represents a recipe.
 * @type {Object}
 */
export type T_Recipe = {
  id: number;
  image: string;
  name: string;
  servings: number;
  ingredients: T_Ingredients[];
  time: number;
  description: string;
  appliance: string;
  ustensils: string[];
};

/**
 * Represents a dropdown.
 * @type {Object}
 */
export type T_DropdownOptions = {
  ingredients: T_Options;
  appliances: T_Options;
  ustensils: T_Options;
};

/**
 * Represents options for a dropdown.
 * @type {Object}
 */
export type T_Options = {
  title: string,
  data: string[]
}

/**
 * Represents a string for search in sessionStorage.
 * @type {string}
 */
export type T_SearchInSessionStorage = string;

/**
 * Represents either a single string or an array of strings for tags in sessionStorage.
 * @type {string[]}
 */
export type T_TagInSessionStorage = string[];

/**
 * Represents the structure for search and tags in sessionStorage.
 * @type {Object}
 */
export type T_SearchSessionStorage = {
  search?: T_SearchInSessionStorage;
  tags?: T_TagInSessionStorage;
};

/**
 * Type definition for SessionStorage operations.
 * @type {Object}
 */
export type T_SessionStorage = {
  removeSearchAndTags: () => void;
  getSearchAndTags: () => T_SearchSessionStorage;
  saveSearchAndTags: (search?: T_SearchInSessionStorage, tags?: T_TagInSessionStorage) => void;
  isTagInList: (tag: string) => boolean;
  removeSearch: () => void;
  removeTag: (tag: string) => void;
}
