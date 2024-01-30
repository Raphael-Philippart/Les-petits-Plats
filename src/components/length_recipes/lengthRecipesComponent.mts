import lengthComponent from './lengthComponent.mjs';

const LengthRecipesComponent = (length: number): void => {
  const sectionDropdowns = document.querySelector('#dropdowns') as HTMLDivElement;

  sectionDropdowns.appendChild(lengthComponent(length));
}

export default LengthRecipesComponent;
