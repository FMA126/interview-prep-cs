const binarySearch = (arr, element) => {
  let startIndex = 0
  let endIndex = arr.length - 1
  let midpoint

  while (startIndex <= endIndex) {
    midpoint = Math.floor((startIndex + endIndex) / 2)

    if (arr[midpoint] === element) {
      return midpoint
    }

    if (arr[midpoint] < element) {
      startIndex = midpoint + 1
    } else {
      endIndex = midpoint - 1
    }
  }

  return -1
}

module.exports = {
  binarySearch
}
