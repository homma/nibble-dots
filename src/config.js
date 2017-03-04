
// namespace
let nd = {}
nd.config = {}

// number of dots in resulting image
nd.config.dot = {}
nd.config.dot.height = 64
nd.config.dot.width  = 64

// size of preview screen
nd.config.preview = {}
nd.config.preview.size = 10

// size of dot editor screen
nd.config.dot_box = {}
nd.config.dot_box.size = 80

// size of color palette
nd.config.color_palette = {}
nd.config.color_palette.width = 5 

// size of controller button
nd.config.button = {}
nd.config.button.height = 5
nd.config.button.width  = 5

// size of cursor
nd.config.cursor = {}
nd.config.cursor.width = 5
nd.config.cursor.height = 10
nd.config.cursor.color = 

// color configurations

nd.config.color = {}
nd.config.color.num = 16

// color names
// https://www.w3.org/TR/SVG/types.html#ColorKeywords
nd.config.color.white = "white"
nd.config.color.black = "black"

// "rgb(0,0,0)", "rgb(n,n,n)" ... "rgb(255,255,255)"
// rgb(0,0,0) => black (no light)
// rgb(255,255,255) => white
// n : 0 17 34 51 68 85 102 119 136 153 170 187 204 221 238 255
nd.config.colors = []

// initialization
{
  let c = nd.config.colors
  let n = nd.config.color.num
  let k = 255 / (n - 1)
  let keys = [...Array(n).keys()]
  keys.map( (v, i) => i * k ).forEach( v => c.push(`rgb(${v},${v},${v})`) )
}

