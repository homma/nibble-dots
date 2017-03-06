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
