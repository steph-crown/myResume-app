// A function that takes in an array and divides it into sub-arrays containing at most a particular number of element

export default (array, size) => {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}