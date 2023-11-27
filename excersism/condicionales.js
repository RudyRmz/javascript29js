

// function needsLicense(kind) {
//     // if (kind === "car" || kind === "truck" ){
//     //     return true
//     // } else{
//     //     return false
//     // }
//     return kind === "car" || kind === "truck" ? true : false
// }

// console.log(needsLicense('bike'))

// function chooseVehicle(option1, option2) {
//     let vehicle =""
//     let options = [option1, option2]
//     options.forEach((option)=>{
//         if(option1 < option2){
//             vehicle = option1
//         }else{
//             vehicle = option2
//         }
//     })
//     return `${vehicle} is clearly the better choice.`
// }

// console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))

function calculateResellPrice(originalPrice, age) {
    let porcentaje = 0
    if (age < 3){
        porcentaje = .80
    }else if (age > 10){
        porcentaje = .50
    }else{
        porcentaje = .70
    }
    let result = originalPrice * porcentaje

    return result

}

console.log(calculateResellPrice(1000, 7))
