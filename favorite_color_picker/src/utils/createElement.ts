export default function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  parent?: HTMLElement,
  attributes?: Record<string, string>,
  textContent?: string
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);

  if (parent) {
    parent.appendChild(element);
  }

  if (attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key))
        element.setAttribute(key, attributes[key]);
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}
