let koders = ["Rudy", "Hector", "Ashanti"]

const kodersUpperCase = (kodersList = koders) => {
    let result = kodersList.map((koder) => {
        return koder.toUpperCase()
    })
    console.log(result)
}

kodersUpperCase(koders)

let sizes = [
    {unit: "inch", length: 2, width: 5},
    {unit: "inch", length: 4, width: 10},
    {unit: "inch", length: 7, width: 7}
]

const fixArray = (wrongArray) => {
    let result = wrongArray.map((item)=>{
        return {unit: "cm", length: item.length * 2.54, width: item.width * 2.54};
    })
    console.log(result)
}

fixArray(sizes)