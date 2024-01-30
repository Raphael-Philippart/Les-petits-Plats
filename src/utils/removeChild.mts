const removeChild = (element: Element | null) => {
  while (element!.firstChild) element!.removeChild(element!.firstChild);
}

export default removeChild;
