let numbers = [2,45,6,7]

const getTotalSum = (numbersArray) => {
    let result = numbersArray.reduce((accum, current)=>{
        return accum + current
    }, 0)
    return result
}

let totalSum = getTotalSum(numbers)

console.log(totalSum)