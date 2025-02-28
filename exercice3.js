// function calculateDays(currentAge,otherAge){
//     let currentDays = currentAge * 365
//     let otherDays = otherAge * 365
//     let restDays = otherDays - currentDays
//    if (otherAge< currentAge){
//     console.log(`L' age visé est inférieure à l'age actuel`)
//    }else {
//     console.log(`Vous avez vécu ${currentDays} jours . Il vous reste ${restDays} jours`)
//    }
// }
// calculateDays(8,86)

let formTag = document.querySelector('form')
formTag.addEventListener('submit', function(e){
    e.preventDefault()
    let currentAgeTag = document.querySelector('input[name="currentage"]').value
    let targetAgeTag = document.querySelector('input[name="targetage"]').value
    let futureDays = targetAgeTag * 365
    let currentDays = currentAgeTag * 365
    let differenceDays = futureDays - currentDays
    console.log(`Vous avez vécu ${currentDays} jours. Il vous reste encore ${differenceDays} jours avant d'atteindre vos ${targetAgeTag} ans.`)

})