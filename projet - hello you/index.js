const userName = window.prompt("Quel est votre prénom ?");
const birthYear = window.prompt("quelle est ton année de naissance ?")
const birthMonth = window.prompt("quel est ton mois de naissance ?")
const birthDay = window.prompt("quel est ton jour de naissance ?")


let currentYear =  new Date().getFullYear();
console.log(currentYear);
let currentMonth =  new Date().getMonth();
console.log(currentMonth);
let currentDay =  new Date().getDate();
console.log(currentDay);



let ageYear = currentYear - birthYear;
let ageMonth = currentMonth - birthMonth;
let ageDay = currentDay - birthDay;

console.log(`Bonjour ${userName}, vous avez ${ageYear} ans, ${ageMonth} mois et ${ageDay} jours !`);