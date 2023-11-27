let line = "Stands so high"

function frontDoorResponse(line) {
    let firstLetter = line[0]
    return firstLetter
}

console.log(frontDoorResponse(line))

function frontDoorPassword(word) {
    let wordLowerCase = word.slice(1).toLowerCase()
    let wordUpperCase = word.slice(0,1).toUpperCase()
    let completePassword = `${wordUpperCase}${wordLowerCase}`
    return completePassword
}

console.log(frontDoorPassword("SHIRE"))

function backDoorResponse(line) {
    let lastLetter = line.trim().slice(-1)
    return lastLetter
}

console.log(backDoorResponse("SHIRx "))

function backDoorPassword(word) {
    let wordLowerCase = word.slice(1).toLowerCase()
    let wordUpperCase = word.slice(0,1).toUpperCase()
    let completePassword = `${wordUpperCase}${wordLowerCase}`
    let phrase = `${completePassword}, please`
    return phrase
}

console.log(backDoorPassword("SHIRE"))