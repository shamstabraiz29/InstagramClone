export const createElement = (elmentType, props, ...children) => {
  const element = document.createElement(elmentType);
  children.forEach((child) => {
    if (typeof children === "object") {
      if (Array.isArray(child)) {
        child.forEach((innerChild) => {
          element.appendChild(innerChild);
        });
      } else {
        element.append(child);
      }
    } else {
      element.innerHTML = children;
    }
  })
  return handleProps(element, props);
};

const handleProps = (element, props) => {
  if (props) {
    Object.keys(props).forEach((prop) => {
      if (prop) {
        if (/^on.*$/.test(prop)) {
          element.addEventListener(prop.substring(2), props[prop]);
        } else {
          element.setAttribute(prop, props[prop]);
        }
      }
    })
  }
  return element;
}


export const reactDOM = {
  render: (element, rootElement) => {
    rootElement.append(element)
  }
}