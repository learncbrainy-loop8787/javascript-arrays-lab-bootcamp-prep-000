var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return Ralph
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(Broom) { 
  return [...kittens,Broom]
}
function 
  