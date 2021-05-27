// Чему равны d, e, f и почему ?
const a = 1
const b = 2
const c = 3

const d = (a > b) ? (c < b) : (c > a)
const e = (a > b) || 'колбаса'
const f = (b > c) || !undefined

console.log(d, e, f)