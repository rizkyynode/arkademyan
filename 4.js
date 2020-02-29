function randomize(number) {
  const bilPrima = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  
  var array = []
  for (i=0;i<number;i++) {
    array.push(bilPrima[Math.floor(Math.random() * bilPrima.length)])
  }
  
  var sum = array.reduce((total, current) => total + current)
  
  return {
    array: array,
    sum
  }
}

console.log(randomize(6));