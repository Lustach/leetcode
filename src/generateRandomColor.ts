// rgb
function getRandomColor(){
    const limit: number = 255
    const generateRGB = (limit: number)=> Math.floor(Math.random() * limit)
    return `${generateRGB(limit)}.${generateRGB(limit)}.${generateRGB(limit)}`
}

console.log(getRandomColor())

//todo hex(это ад чи не?)