

function recursive(number){
    if(number == 1 || number == 0) return 1
    return number * recursive(number -1)
}


module.exports = {recursive}