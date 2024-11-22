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


// Arrays:
const personArray = ["Sidd", "John", "Alice"];
 console.log(personArray);
 console.log(personArray[0]);
 console.log(personArray[1]);
 console.log(personArray[2]);

 // Write a program that prints all the even numbers in an array
 const Numberarray = [21, 22, 23, 24, 25, 26, 27, 28, 29];
 const size = Numberarray.length;
 for(let i =0; i<size; i++)
 {
   if(Numberarray[i]%2==0)
   {
      console.log(Numberarray[i] + " is even");
   }
   else
   {
      console.log(Numberarray[i] + " is odd");
   }
 }

