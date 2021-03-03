// import the function sum from the app.js file
//const { sum } = require('./app.js');
/*
// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

*/


//const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})



test("127.9 yens should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')
    // use the function like its suppoed to be used
    const yenes = fromYanToPound(127.9);   
   
   const expected2 = 0.8;
    // this is the comparison for the unit test
    expect(expected2).toBe(yenes);
     
}) 


test("50 yens should be 0.312744 pounds", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yenes = fromYanToPound(50);
   //  console.log("yen="+yenes); 
    const expected = (50 * 0.8)/127.9;  //da un resultado equivocado el test =5329.16666
   // console.log("esperado"+expected); 
    expect(expected).toBe(yenes);

     
})


test("1.2 dolars should be 127.9 yenes", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    // use the function like its suppoed to be used
    const yenes = fromDollarToYen(1.2)
    
    const expected = (1.2 * 127.9)/1.2;  //da un resultado equivocado el test =5329.16666
    //const expected2 = 127.9;
    // this is the comparison for the unit test
    expect(expected).toBe(yenes);
})

