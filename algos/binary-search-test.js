const search = require('./binary-search')
const binarySearch = search.binarySearch

const createArr = (numberOfElements) => {
  const arr = []
  for (let i = 0; i < numberOfElements; i++) {
    arr.push(i)
  }
  return arr
}

const arr = createArr(1000000)

const element = 876999

const indexOfElement = binarySearch(arr, element)

console.log(indexOfElement)
