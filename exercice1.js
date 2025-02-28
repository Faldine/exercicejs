// // // let number =100
// // // let mod = number%5
// // // console.log(mod)
// // // console.log(`Si l'on divise ${number} par 5,le reste est de ${mod}`)

// function calculateModulo(number, coef=5){
  // let modulo = number % coef
    //console.log(modulo)
 //}
 //calculateModulo(11) 

//  const formTag = document.querySelector("form")
//  formTag.addEventListener("submit",function(e){
//     e.preventDefault()
//     let inputnumberofChoiceTag = document.querySelector('input[name="numberofChoice"]')
//     let inputcoefTag = document.querySelector('input[name="coef"]')
//     console.log(inputnumberofChoiceTag.value)
//     console.log(inputcoefTag.value)
//     function calculateModulo(inputnumberofChoice,inputcoef=5){
//         let modulo = inputnumberofChoice % inputcoefcoef
//         console.log(modulo)


        
//     }
//     calculateModulo()
//  })

function calculateModulo(e){
    e.preventDefault()
    let numberTag = Number(document.querySelector('input[name="number"]').value)
    const numberTagModulo = numberTag % 5
    console.log(`Le reste de la division de ${numberTag} par 5 est ${numberTagModulo}`)
}   

let formTag = document.querySelector("form")
formTag.addEventListener('submit', calculateModulo)

