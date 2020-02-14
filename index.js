var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return Ralph
}
function destructivelyPrependKitten(Bob) {
  kittens.upshift(Bob)
}
