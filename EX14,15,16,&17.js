//Exercise 14
let people=['Ahmed','Ahsan','Sana','Razi'];

const invite=people.map((e)=>{
    console.log(e+' is invited on dinner')
})
//Excercise 15
console.log(people[1] +' & '+people[3]+' cannot come.')
people[1]='Ali';
people[3]='Haseeb';
const invite1=people.map((e,i)=>{
    console.log(e+' is invited on dinner')
})
//Excercise 16
console.log('We have found a bigger table so we are extending our number of guests');
const newGuest=[...people,'Khaula','Hareem','Sara'];
const invite2=newGuest.map((e,i)=>{
    console.log(e+' is invited on dinner')
})
//Excercise 17;
console.log('I can invite only two people for dinner');
console.log(`Sorry ${people[people.length-1]} I cannot invite you on dinner`)
people.pop();
console.log(`Sorry ${people[people.length-1]} I cannot invite you on dinner`)
people.pop();
console.log(`Sorry ${people[people.length-1]} I cannot invite you on dinner`)

const invite3=people.map((e,i)=>{
    console.log(e+' is invited on dinner')
})
