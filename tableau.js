const students = [
    {
        name:'Djelil',
        age:10,
        sex:'M'
    },
    {
        name:'Phanie',
        age:15,
        sex:'F'
    },
    {
        name:'Loïc',
        age:9,
        sex:'M'
    },
    {
        name:'Kenneth',
        age:5,
        sex:'M'
    },
    {
        name:'Lusclarita',
        age:1,
        sex:'F'
    },
]
const studentsLenght = students.length
const studentsSexM = students.filter(item => item.sex == 'M')
const studentsSexF = students.filter(item => item.sex == 'F')
console.log('students Lenght =>', studentsLenght)
console.log('studentsSexM  =>', studentsSexM)
console.log('studentsSexF  =>', studentsSexF)
const searchOnlyDjelil = students.find(item => item.name == 'Djelil')
console.log(searchOnlyDjelil)

students.push({
    name:'Ecole229',
    age:1,
    sex:'F'
})
console.log(students);











let compteur = 1; 
let formTag = document.querySelector("form");

formTag.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const lastname = document.querySelector('input[name="lastname"]').value;
    const firstname = document.querySelector('input[name="firstname"]').value;
    const age = Number(document.querySelector('input[name="age"]').value); 
    const sex = document.querySelector('input[name="sex"]').value;
    const matrimonialStatus = document.querySelector('input[name="matrimonial"]').value;
    const provenance = document.querySelector('input[name="provenance"]').value;

    let table = document.querySelector('table');

    let newRow = table.insertRow();

    let cellCompteur = newRow.insertCell();
    let cellLastname = newRow.insertCell();
    let cellFirstname = newRow.insertCell();
    let cellAge = newRow.insertCell();
    let cellSex = newRow.insertCell();
    let cellMatrimonial = newRow.insertCell();
    let cellProvenance = newRow.insertCell();

    cellCompteur.textContent = compteur;
    cellLastname.textContent = lastname;
    cellFirstname.textContent = firstname;
    cellAge.textContent = age;
    cellSex.textContent = sex;
    cellMatrimonial.textContent = matrimonialStatus;
    cellProvenance.textContent = provenance;

    compteur++;

    formTag.reset();
});
