// console.log("Hello world!");
// console.log("Hello world! again!");


// var(deprecated), let, const -> variables
 let a = 1;
 a = 2;
 console.log(a);

 //datatypes - string, boolean, number

 let first_name = "Siddhant"; //string
 let age = 18;  //number 
 let isMarried = true; //boolean
 console.log("This person name is: " +first_name + " His age is " + age + " is he married?" + isMarried);


 if(isMarried == true)
 {
    console.log("This person is married:" +first_name);

 }
 else
 {
    console.log("This person is not married.");
 }

 // LOOPS 
 // Sum from   0 to n
 let sum = 0;
 let n = 100;
 for(let i = 0; i <= n; i++)
 {
    sum += i;
 }
 console.log("Sum is: " + sum);
