function logTwoValues(x1, x2){

    console.log(`The two inputed values are ${x1}, and ${x2}`)

}

function defaultValue (user = "NO NAME"){
    console.log(`Hello, ${user}. Welciome to programming`)
}

function introduction(name){
    return `Hi, my name is ${name}.`
}


function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.` 
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// logTwoValues("test", 42)

// defaultValue("GARCIA")