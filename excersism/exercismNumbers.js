let ratePerHour = 89
let budget = 20000


// function dayRate(ratePerHour) {
//     return ratePerHour *8
// }

// console.log(dayRate(ratePerHour))

// function daysInBudget(budget, ratePerHour) {
//     let ratePerDay = ratePerHour * 8
//     return Math.floor(budget / ratePerDay)
// }

// console.log(daysInBudget(budget, ratePerHour))

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let ratePerDay = ratePerHour * 8 // 712
    let daysFacturing = 22
    if (numDays > daysFacturing){
        let monthsCompletes = Math.floor(numDays / daysFacturing ) // 10
        let daysRest = numDays % daysFacturing

        let totalDiscount = (ratePerDay * daysFacturing) * discount

        let totalWithDiscountPerMonth = (ratePerDay * daysFacturing) - totalDiscount

        let totalPerProjectMonthsComplete = totalWithDiscountPerMonth * monthsCompletes
        let totalWithoutDiscount = daysRest * ratePerDay
        let total = Math.ceil(totalWithoutDiscount + totalPerProjectMonthsComplete)
        return total 
    } else {
        return ratePerDay * numDays
    }
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))

