import lengthComponent from './lengthComponent.mjs';
const LengthRecipesComponent = (length) => {
    const sectionDropdowns = document.querySelector('#dropdowns');
    sectionDropdowns.appendChild(lengthComponent(length));
};
export default LengthRecipesComponent;
