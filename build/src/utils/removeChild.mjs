const removeChild = (element) => {
    while (element.firstChild)
        element.removeChild(element.firstChild);
};
export default removeChild;
