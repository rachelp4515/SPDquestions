// create all possible combinations based off a list of characters and a length
// *comninations* not *permutations*, so [1,2,3] and [2,1,3] are the same 



// input:  [1,2,3,4,5] , 2

// output: [1,1] [1,2] [1,3] [1,4] [1,5]
//         [2,2] [2,3] [2,4] [2,5] 
//         [3,3] [3,4] [3,5]
//         [4,4] [4,5]
//         [5,5]

function combo(list, length){
    let count = `${list[0]}`.repeat(length).split("")

    const possible = []
    while(count.length == length) {
        possible.push(count)
        count = step(count, list)
    }
    return possible
}

function step(count, symbols, i=0) {
    if(count[i] == symbols[symbols.length - 1]) {
        const newCount = step(count, symbols, i + 1)
        newCount[i] = newCount[i + 1]
        return newCount
    }
    const newCount = [...count]
    newCount[i] = symbols[symbols.indexOf(newCount[i]) + 1]
    return newCount
    
}


const l = ["1","2","3", "4", "5", "6"]
const length = 7
console.log(combo(l, length).length)

