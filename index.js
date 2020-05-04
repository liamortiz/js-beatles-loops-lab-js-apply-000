theBeatlesPlay = (musicians, instruments) => {
  let arr = []
  for (let i = 0; i < musicians.length; i++) {
    arr[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return arr
}

johnLennonFacts = (facts) => {
  let i = 0
  let arr = facts
  while (i < facts.length) {
    i++
    arr[i] += "!!!"
  }
  return arr
}