import createElement from './createElement.mjs';
import { T_ElementAttributes } from '../../type/type.mjs';

/**
 * Shortens the given text to a specified character limit, adds three dots, and includes a "Read More" button.
 * @param {string} text - The text to be shortened.
 * @param {number} charLimit - The character limit for the shortened text.
 * @returns {HTMLElement} - The HTML element containing the shortened text and "Read More" button.
 */
export const shortenedText = (text: string, charLimit: number): HTMLElement => {
  if (text.length <= charLimit) {
    // No need to shorten, create a simple text element
    return createElement('p', undefined, undefined, text);
  }

  // Shorten the text to the specified character limit
  const shortenedText = text.substring(0, charLimit) + '...';

  // Create the shortened text element with "Read More" button
  const divElement = createElement('p', undefined, undefined, shortenedText);

  // Create the "Read More" button and attach a click event
  const readMoreButtonAttributes: T_ElementAttributes = {
    tabindex: 0,
    role: 'button',
    ariaLabel: 'Lire la suite',
  };
  const readMoreButtonClass: string[] = ['recipe-read'];
  const readMoreButton = createElement('span', readMoreButtonAttributes, readMoreButtonClass, 'Lire la suite');

  readMoreButton.addEventListener('click', () => {
    showFullText(text, divElement);
  });

  divElement.appendChild(readMoreButton);

  return divElement;
};

/**
 * Displays the full text when the "Read More" button is clicked.
 * @param {string} fullText - The full text to be displayed.
 * @param {HTMLElement} element - The HTML element where the full text will be displayed.
 */
const showFullText = (fullText: string, element: HTMLElement): void => {
  element.textContent = fullText;
};
