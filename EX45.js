//EXCERCISE#45
let car=(modelName,manufacturer,color)=>{
    let carObj={
        Model:modelName,
        Manufacturer:manufacturer,
        Color:color
    }
    return carObj
}
console.log(car('Audi A5',"Volkswagen Group","Grey"))