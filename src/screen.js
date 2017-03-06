nd.svg = {}

{ // screen.js

nd.svg.createScreen = (id) => {

  screen = document.getElementById(id)

  // set size
  screen.style.width = nd.data.screen.width
  screen.style.height = nd.data.screen.height
  screen.style.border = nd.data.screen.border

  // set cursor
  screen.style.cursor = nd.config.screen.cursor

}

} // screen.js
