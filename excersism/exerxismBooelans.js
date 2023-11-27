// const knightIsAwake = true;

// function canExecuteFastAttack(knightIsAwake) {
//     return !knightIsAwake ? true : false
//     // if (!knightIsAwake){
//     //     return true
//     // } else {
//     //     return false
//     // }
// }

// console.log(canExecuteFastAttack(knightIsAwake))

const knightIsAwake = true;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = true;

// function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
//     if(!knightIsAwake & !archerIsAwake & prisonerIsAwake){
//         return true
//     } else if(!knightIsAwake & archerIsAwake & !prisonerIsAwake){
//         return true
//     } else if(knightIsAwake & !archerIsAwake & !prisonerIsAwake){
//         return true
//     } else if(!knightIsAwake & archerIsAwake & prisonerIsAwake){
//         return true
//     }else if(knightIsAwake & !archerIsAwake & prisonerIsAwake){
//         return true
//     }else if(knightIsAwake & archerIsAwake & prisonerIsAwake){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(canSpy(knightIsAwake, archerIsAwake,prisonerIsAwake))

// function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//     return !archerIsAwake && prisonerIsAwake ? true : false

//     // if(!archerIsAwake && prisonerIsAwake){
//     //     return true
//     // } else {
//     //     return false 
//     // }
// }
// console.log(canSignalPrisoner(archerIsAwake,prisonerIsAwake))

function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,) {
    if(petDogIsPresent && !archerIsAwake && !knightIsAwake && !prisonerIsAwake || !petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake || petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake || petDogIsPresent && !archerIsAwake && knightIsAwake && !prisonerIsAwake || petDogIsPresent && !archerIsAwake && knightIsAwake && prisonerIsAwake){
        return true
    } else if(!petDogIsPresent && !archerIsAwake && !knightIsAwake && !prisonerIsAwake || !petDogIsPresent && archerIsAwake && !knightIsAwake && !prisonerIsAwake || petDogIsPresent && archerIsAwake && !knightIsAwake && !prisonerIsAwake || !petDogIsPresent && archerIsAwake && !knightIsAwake && prisonerIsAwake || !petDogIsPresent && archerIsAwake && !knightIsAwake && !prisonerIsAwake || petDogIsPresent && archerIsAwake && !knightIsAwake && prisonerIsAwake || !petDogIsPresent && !archerIsAwake && knightIsAwake && !prisonerIsAwake || !petDogIsPresent && !archerIsAwake && knightIsAwake && prisonerIsAwake || !petDogIsPresent && archerIsAwake && knightIsAwake && !prisonerIsAwake || petDogIsPresent && archerIsAwake && knightIsAwake && !prisonerIsAwake || !petDogIsPresent && archerIsAwake && knightIsAwake && prisonerIsAwake || petDogIsPresent && archerIsAwake && knightIsAwake && prisonerIsAwake){
        return false
    } 
}

console.log(canFreePrisoner(archerIsAwake,prisonerIsAwake, knightIsAwake, petDogIsPresent))
