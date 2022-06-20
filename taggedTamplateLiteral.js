function html([firstString, ...restString], ...values) {  
    console.log(firstString)  
    console.log(restString)
    console.log(values)
    
    return values.reduce(function(init, current){
        return [...init, current, restString.shift()]
    },[firstString])
}

let brand = 'F8'
let course = 'Javascript'
let output = html`Hoc lap trinh ${course} tai ${brand}!`

console.log(output)
console.log(output.join(''))