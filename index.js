// alert('Hello world');

// var year=2021;

/*----------------------------------------------------------IF & ELSE CONDITION---------------------------------------------*/
// if(year%4===0)
// {
//     if(year%100===0)
//     {
//         if(year%400===0)
//         {
//             console.log("This is " + year + "leap year");
//         }
//         else{
//              console.log("Not a leap year");
//         }
//     }else{
//         console.log("this is leap year");
//     }
// }else{
//     console.log("this is not leap year");
// }



/*----------------------------------------------------------FUNCTION Types---------------------------------------------*/

//              Function defination

// syntax of creating function - Function functionName (parameters){statements}
// function arithmatic(){
//     var a=10, b=5;
//     var c = a+b;
//     var d = a-b;
//     var e = a* b;
//     var f = a/b;
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)

// }
// console.log(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
// Calling of Function
// arithmatic();

// function sum(a,b){
//     var c=a+b;
//     console.log(c)
// }

// sum(10,500);
/*---------------------------------------------------ECMA SCRIPT (ES6)-------------------------------------------------------*/
// Ecma script 2015 (ES6)


/*----------------------------------------------------------LET AND CONST KEYWORD---------------------------------------------*/
// Var Keyword Scope

// function sum(){
//     var myFirstName = "vishnu";
//     console.log("outer " + myFirstName);
//     if(true){
//         var myLastName = "Ojha"
//         console.log("Inner " + myLastName);
//         console.log("Inner " + myFirstName);
//     }

//     console.log("Innerouter " + myLastName);
// }

// sum()


// let keyword scope and example
// function sum(){
//     let myFirstName = "vishnu";
//     console.log("outer " + myFirstName);
//     if(true){
//         let myLastName = "Ojha"
//         console.log("Inner " + myLastName);
//         console.log("Inner " + myFirstName);
//     }

//     console.log("Innerouter " + myLastName);
// }

// sum()



/*----------------------------------------------------------TEMPLATE STRING---------------------------------------------*/

// Template literals
// It's very easy way to write a string, let's see an example of Template literals

// function mult(){
//     let num = 12;

//     for (let n=1;n<=10;n++)
//     {
//         console.log(`${num} * ${n} = ${num*n}`);
//     }
// }
// console.log(mult());


/*----------------------------------------------------------FAT ARROW FUNCTION---------------------------------------------*/

// Fat Arrow Function 

// exmaple of normal function 
// function sum(){
//     let a=10,b=20;
//     let sum = a + b;
//     console.log(`The sum of two number is ${sum}`);
// }
// sum()


// Example of fat Arrow function 

// const sum = () =>{
//     let a=6,b=7;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`;
// }

// console.log(sum());

// const sum = () => `The sum of two numbers is ${(a=7) + (b=6)}`;
// console.log(sum());



/*----------------------------------------------------------Arrays in JS---------------------------------------------*/

// Array in JS : Synatx => var arrayName = ["",""];

// var myFriends = ["Hk","Darshit","anup","Arbaz","apan"];
// console.log(myFriends[1]);
/*-------------using normal for loop in Array---------*/
// Normal way using for loop
// for(var i=0;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }

/*-------------ES6 for loop in Array---------*/
// After ES6 We have two new loop in for loop which are for-in and for-off 

/*-------------For-in loop in Array---------*/
// For-in , it's Always return index value as results

    // for(let elements in myFriends){
    //     console.log(elements);
    // }

/*-------------For-off loop in Array---------*/
// For-off , It's awlays return array values in the results

// for(let elements of myFriends){
//     console.log(elements);
// }

/*------------- for-each loop in Array---------*/

// Traditonal way to write for each loop

// myFriends.forEach(function(elements,index,array){
// console.log(elements + " " + index + " " + array)
// });

// Modern way using Fat array function

// myFriends.forEach((elements,index,array) => {
//     console.log(elements + " " +index+ " " +array );
// });

/*-------------Array-INDEX OF----------------*/
// const array = ['hk','darshit','anup','arbaz']

// if the elemnt is in the array it will return the index of element-use forward search
// console.log(array.indexOf('darshit'));
// if the elemnt is not in the array it will return -1
// console.log(array.indexOf('apan'));


/*-------------Array-LASTINDEX OF------------*/
//return the last index of an element in the arrray or return -1 
// console.log(array.lastIndexOf("arbaz"));

/*-------------Array-INCLUDES----------------*/
// determines whether the array is containt a value or not
// returning true and false as appropirate / boolean value
// it's checkes the value is already inside in the array or not
// it's case sensitive , use forward search 
// console.log(array.includes("apan"));

/*------------- Map in Array---------*/

// its return the value in the form of boolean and also give new array whihc containt all the results
// const arr1 = [1,5,7,3,9]

// let newArr = arr1.map((elem,index,arr) => {
//     return elem>3;
// })

// console.log(arr1)
// console.log(newArr)


// let newArr = arr1.map((curElm,index,arr) =>{
//     return `Index : ${index} values :${curElm}`;
// })
// console.log(newArr);


// Example

// 1) find the square root of every element of array 

// let arr = [2,4,6,7,8]

// let arr1 = arr.map((curElm) => {
//     return curElm**2;
// }).filter((curElm) => {
//     return curElm >20;
// });

// In easy way & also we can use chaining method in map function
// let arr1 = arr.map((curElm) => curElm**2) .filter((curElm) =>curElm >20 ).reduce((accumulator,curElm,index,array) => accumulator += curElm
// );

// console.log(arr1 );

/*------------- Reduce in Array--------------*/
// it's changes the 3d and 2d array into single array
// Example
// const arry = [10,8,6,2,25]

// let arr1 = arry.reduce((accumulator,elem,index,array) => {
//     return accumulator  += elem;
// });

// console.log(arr1);

/*------------- Date in JS-----------------*/

// Js date objects represent a single moment in a time a platform independent . 
// Date Objects conatins a number that represent miliseconds since 1 january 1970 UTC

//Creating a dte objects 

// 1. new Date()
// 2. new Date(year,month,day,hour,miniutes,seconds,miliseconds) it takes 7 arguments 
// 3. new Date(miliseconds) in this we avoid month section 
// 4. new Date(String) 


//1. new Date()

// let currDate = new Date();
// console.log(currDate);
//  console.log(new Date().toLocaleString()); // only give us a date of current day
//  console.log(new Date().toString());          // give us all the deatils as per indian standard time

 //2. Date.now()
//  it returns the numeric values corresponding to the current time number of milliseconds elapsed  since january 1, 1970 00:00:00 UTC

// console.log(Date.now());

// 3. Date(year,month,day,hours,minutes,miliseconds) 
    // var d =   new Date("October 13, 2014 11:13:20");
    // console.log(d);

// 4. dateString()
//it's create a new date object from a date string 
// var d =   new Date("October 13, 2014 11:13:20");
    // console.log(d.toLocalString());

//5. new Date(milliseconds)
// it;s createsa new date objects as zero time plus miliiseconds 

/*-------------Math objects in JS-------------*/

// it's allows you to perfome mathematicals task on numbers
// console.log(Math.PI) 

// // round function 
// let num = 10.66;
// console.log(Math.round(num));

// Power function 
// it's returns the x to the power of y
// console.log(Math.pow(2,3));

//Square root function
// it's return the square root of number

// console.log(Math.sqrt(64));


// Ceil function
// // return the value of X rounded up to it's nearest Integer
// console.log(Math.ceil(10.546));
// console.log(Math.ceil(10.456));

// Floor function
// return the value of X rounded down to it's nearest Integer
// console.log(Math.floor(10.54));


//  How to select Elements and refrences  by getElement
// document.getElementById(""); -----------> we pass ID as argument in this ---> Using ID 
// document.getElementByClassName(""); -----------> we pass ClassName as argument in this ---> Usiing ClassName 
// document.getElementByTagName(""); -----------> we pass HTML Tag as argument in this ---> Using Tag 
// document.getElementByName(""); -----------> we pass name as argument in this ---> Using Element Name 


//  How to select Elements and refrences  by querySelector

// document.querySelector("Pass id or class as an argument").innerHTML;
// always returns the first maching value from array

// document.querySelectorAll("Pass id or class as an argument").innerHTML;
//return all elements from array


// Events In JS 

// Event : HTML Events are the "Things" that happens to HTML elements 
// When js is used in the HTML page , js can "React" on these events 

// HTML Events : An Html event is something that browser dose ot something that user dose 

// Here are the some example of html events 
// 1. Html web page has finished loading
// 2. Html field has chnaged
// 3. Html button was clicked 
// 4. Often, when events happen you may want to do something

// JS let you executes the code when evenets are detected

// There are 4 ways of writting Events in JS

// 1. using inline alert()
// 2. Using calling function (we haver already seen it and most comman way )
// 3. Using inliine Events(like html onclick:"" property and element.onclick)
// 4.  Using Event Listner (Add EventListener and attach it's attchEvent )

// hello dhruv 


// the ways to convoret the string into number 

// 1) using h=the unary operator 
        // var n = +str 

// 2) using the Number constructor
    // var n =     Number(str) 

// 3) Using the parseFloat function
    // var n = parseFloat(str )
