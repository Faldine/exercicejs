// let number = 3
  
//     if(number === 0 ){
//         console.log("Zero")
//     }
//     else if (number === 1){
//         console.log("One")
//     }
//     else if (number === 2){
//         console.log("Two")
//     }
//     else if (number === 3){
//         console.log("Three")
//     }
//     else if (number === 4){
//         console.log("Four")
//     }
//     else if (number === 5){
//         console.log("Five")
//     }
//     else{
//         console.log("Erreur:Vous devez inscrire un nombre entre 0 et 5")   
//     }         

let formTag = document.querySelector("form")
formTag.addEventListener('submit', function(e){
    e.preventDefault()
    let number = document.querySelector('input[name="number"]').value
    let numberTag = Number(number)
    if (numberTag === 0) {
        console.log("Zero")
    }
    else if (numberTag === 1) {
        console.log("One")
    }
    else if (numberTag === 2) {
        console.log("Two")
    }
    else if (numberTag === 3) {
        console.log("Three")
    }
    else if (numberTag === 4) {
        console.log("Four")
    }
    else if (numberTag === 5) {
        console.log("Five")
    }
    else {
        console.log("Erreur:Vous devez inscrire un nombre entre 0 et 5")
    }
})
