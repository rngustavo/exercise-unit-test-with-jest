/* // this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum }; */


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}




//retorma yenes
function fromDollarToYen(valor) {    
    let resul =(valor*oneEuroIs.JPY)/oneEuroIs.USD;   
  //  console.log("resultaD="+resul); 
    return resul;
}

//retorna dolars
function fromEuroToDollar(valor) {
    let resul = valor * oneEuroIs.USD
  //  console.log("resultaE="+resul);
    return resul;
}

//retorna pounds
function fromYanToPound(valor) {
  let resul =(valor*oneEuroIs.GBP)/oneEuroIs.JPY;    
//console.log("resultaY="+resul);
    return resul;
}



module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };

//fromYanToPound(127.9);//deberia ser 0.8

