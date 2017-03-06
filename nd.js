let nd = {}
// static config parameters

{ // config.js

// namespace
nd.config = {}

nd.config.test = true

//// screen

nd.config.screen = {}

nd.config.screen.id = "nd_screen"
nd.config.screen.cursor = "default"

//// resulting image

nd.config.image = {}

nd.config.image.height = 64
nd.config.image.width  = 64


//// preview screen

nd.config.preview = {}

nd.config.preview.size = 10


//// dot editor screen

nd.config.editor = {}

nd.config.editor.size = 80
nd.config.editor.x = 30
nd.config.editor.y = 5


//// color palette

nd.config.color_palette = {}

nd.config.color_palette.width = 5 


//// controller button

nd.config.button = {}

nd.config.button.height = 5
nd.config.button.width  = 5


//// cursor

nd.config.cursor = {}

// cursor size
nd.config.cursor.width = 5
nd.config.cursor.height = 10

nd.config.cursor.color = "blue"


//// color configurations

nd.config.color = {}

// sixteen colors per pixel
nd.config.color.num = 16

// color names
// https://www.w3.org/TR/SVG/types.html#ColorKeywords
nd.config.color.white = "white"
nd.config.color.black = "black"

} // config.js

// computed config parameters
// requires config.js

// variables, dynamic values, parameters, settings, ...

nd.data = {}

{ // data.js

nd.data.platform = navigator.platform

nd.data.screen = {}
nd.data.screen.width = window.innerWidth
nd.data.screen.height = window.innerHeight
nd.data.screen.border = "solid 1px"
// nd.data.screen.border = "none"

if(nd.config.test) {

  nd.data.screen.width = 640
  nd.data.screen.height = 960
  nd.data.screen.border = "solid 1px"

}

// "rgb(0,0,0)", "rgb(n,n,n)" ... "rgb(255,255,255)"
// rgb(0,0,0) => black (no light)
// rgb(255,255,255) => white
// n : 0 17 34 51 68 85 102 119 136 153 170 187 204 221 238 255
nd.data.colors = []

// initialization
{
  let c = nd.data.colors
  let n = nd.config.color.num
  let k = 255 / (n - 1)
  let keys = [...Array(n).keys()]
  keys.map( (v, i) => i * k ).forEach( v => c.push(`rgb(${v},${v},${v})`) )
}

} // data.js
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
{ // main.js

let main = () => {

  nd.svg.createScreen(nd.config.screen.id)

}

window.onload = main;

} // main.js

