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
function prependKitten(Arnold) {
 return [Arnold, ...kittens] 
}
  function removeLastKitten() {
    return kittens.slice(0, kittens.length - 1)
  }
  function removeFirstKitten() {
   return kitten.slice(1)
  }