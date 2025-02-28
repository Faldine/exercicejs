let formTag=document.querySelector('form')
formTag.addEventListener('submit',function(e){
   e.preventDefault()
   let age=document.getElementById('inputAge').value ;
   let ageday= age * 365 
   console.log(`Vous avez vécu ${ageday} jours.`)
})
