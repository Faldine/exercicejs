

// let moyen = sum/3
// console.log(moyen)

// if(moyen<=10){
//     console.log("Mention Passable")
// }
// if(moyen>10 && moyen<14){
//     console.log("Mention Assez-Bien")
// }
// if(moyen>=14 && moyen<16){
//     console.log("Mention Bien")
// }
// if(moyen>=16){
//     console.log("Mention Très-Bien")
// }


function calculateAverage(note1, note2, note3, coef1, coef2, coef3){
    let sum = (note1*coef1) + (coef2*note2) + (note3*coef3)
    let moyen = sum/(coef1 + coef2 + coef3)
    console.log(moyen) 
}
calculateAverage(10, 12, 15, 2, 4, 3)

for(let i = 0; i<3; i++){
    console.log(`je suis au ${i} pas.`)
}
[1 , 10, 50, 0.5].forEach(item=> console.log(`ma note est`))