//EXCERCISE #32
const currUsers=['Ali','Razi','Sana','Mehdi','Fardan'];
const newUsers=['Ahmed','Waqas','Haris','RAZI','Fardan'];

newUsers.filter((e)=>{
   let x=e.charAt(0)
   let y=e.slice(1).toLowerCase();
   let nam=x+y;
   if(currUsers.includes(nam)){
    console.log(nam+' is already used.')
   }
   else{
    console.log(nam+' is available')
   }
})




