nd.svg = {}

{ // svg.js


nd.svg.createElement = (screen, tag) => {

  const ns = 'http://www.w3.org/2000/svg';
  let el = document.createElementNS(ns, tag);
  screen.appendChild(el);

  return el;

}

nd.svg.createRect = (screen, x, y, w, h) => {

  let el = createElement(canvas, 'rect');

  el.setAttribute("x", x);
  el.setAttribute("y", y);
  el.setAttribute("width", w);
  el.setAttribute("height", h);

  return el;

}

nd.svg.createCircle = (screen, x, y, r) {

  let el = createElement(canvas, 'circle');

  el.setAttribute("cx", x);
  el.setAttribute("cy", y);
  el.setAttribute("r", r);

  return el;

}

} // svg.js

