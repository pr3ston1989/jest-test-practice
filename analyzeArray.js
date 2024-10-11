function analyzeArray(array) {
    const obj = {
        max: 0,
        min: 0,
        average: 0,
        length: 0
    }
    if (!array || array.length === 0) return obj
    const sortedArray = [...array].sort((a, b) => a - b)
    obj.average = array.reduce((acc, curr) => acc + curr, 0) / array.length
    obj.max = sortedArray[sortedArray.length-1]
    obj.min = sortedArray[0]
    obj.length = array.length

    return obj
}

module.exports = analyzeArray