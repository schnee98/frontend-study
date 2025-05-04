export const isValidContainer = (container: Element | DocumentFragment) => {
  if(!container) return false;
  return container.nodeType === 1 || // Element
         container.nodeType === 9 || // Document
         container.nodeType === 11 // DocumentFragment
};

// https://developer.mozilla.org/en-US/docs/Web/API/Node
