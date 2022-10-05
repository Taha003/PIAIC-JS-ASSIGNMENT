//EXCERCISE#30
const userName=['admin','coder','geek','developer','techGiant'];
let greet=userName.map((e)=>{
    return e
})
if(greet.includes('admin')){
    console.log('Hello admin,would you like to see a status report')
}
else{
    console.log('Hello eric thankyou for loggin in again')
}


