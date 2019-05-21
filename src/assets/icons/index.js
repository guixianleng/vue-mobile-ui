const requireSvg = svg => svg.keys().map(svg)
const svgt = require.context('./svg', true, /\.svg$/)

requireSvg(svgt)
