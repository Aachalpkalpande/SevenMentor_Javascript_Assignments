/* Question and Answer
1) what is javascript => js is the high level interprited programming language
   that can use to create inetractive effect within the web pages.
----------------------------------------------------------------------------------------
2) What are the different data types in JavaScript =>
    there are 2 types :
    1)primtive -> string , boolean, symbol ,null, undefined ,number, bigint.
    2)non primative ->contain only object
        
       1) example : bigint
       let n1=55555556677777ws3s;
        console.log( n1);
    
        2)example:string 
        let w="aach";
        console.log(w);

        3)example : boolean 
        let isLoggedIn="true";
        console.log(isLoggedIn);

        4)ex: null->object
            let b=null;
            console.log(b);

        5)ex: undefined
        let x
        console.log(x);

        6)ex: string
         let c= "abs12";
        console.log(typeof (c));

        7) ex:object
        let x={firstname : "aachal", lastname: "kalpande"};
        console.log(x);
--------------------------------------------------------------------------------
3)	What is the difference between let, const, and var =>
    1) var veriable is a function scope and it will be update and re-decaler.
    ex: 
    var w= 33;
    var d= 99;
    console.log(w);
    console.log(d);

    ex: var function sum(){
     console.log(sum);
    }

    2) let variable is blocked scope and we can update but not redecalre the let veriable and it is global variable.
    ex: 
    let x =11;
    { 
    let x=32;
    }
        console.log(x);

    3) const variable is block scope and we can not change there value after declaration and we not re decare and reupdate the variable
    it must be intialize at the time of declartaion


    ex:
    const e="eradh";
    {
    console.log(e);
    }
---------------------------------------------------------------------
4) What is a function in JavaScript =>
        A function is the block of code that  design to perform perticular action, and it excute when somthing invoke it.
            ex:
            const sum(e,t){
            console.log(sum)
            }
            sum(3,3);
-------------------------------------------------------------------------------------
5)	What is the purpose of is NaN function =>
            the NaN function is determine wether the function is not a number or not, it returns true if the value is nan otherwise false.

      ex:   let b="sima"
            console.log(b); // false

            let c="555";
            console.log(c); //true
-------------------------------------------------------------------------------
6) What is the typeof operator in JavaScript=>
    It is used to determine the type of js variable, it return string indicating  the type of evaluated operand.

ex: let f="string";
    console.log(typeof f);
----------------------------------------------------------
7)	What are JavaScript objects=>
    the javascript object is the collection og key and value pair, where the key are the string and value can be any type,indicating other object
    and object store and manage the data

    const o={city:pune, place:bhosari};
    console.log(o);
------------------------------------------------------
8)	What is an array in JavaScript=>
    Array is the special variable, which can hold more than one value at a time, it is ordered collection of item which is differnt type,

ex: let color=['red ', 'green', 'blue'];
    color[0]='black'; //update
    color.push('white'); //add
    color.pop();        //remove
    console.log(color.length);      //length
   // console.log(color);
----------------------------------------------------------------
9.	Explain the concept of hoisting in JavaScript=>
    in js hoisting behaviour of moving function and variable declaration to the top of their scope during there compile phase,allow them to be used 
    before there atual declartaion in the code.

    ex: variable hoist
        
        console.log(x); //undefined.
        var x=10;

        
        console.log(x);       //referance error
        let x=19;
-----------------------------------------------------------------
10.	What is the difference between == and ===?
    the == losse euality operator perform equals oprationas wheras the===  strict euallity operator perform euals opertaion and tells the types of that variable.

ex: ==
 console.log(7=="7"); //true

 ===
 conosle.log(7 === "7");//false
----------------------------------------------------------------------
11.	What is an event in JavaScript?
    event is an action ocurre recognize in a javacript, often intialize by the browser or user ex, click 
    mouse event, key press, form submission

 ex:  <input type="button" onclick={handlefom} value="okay"/>
---------------------------------------------------------------------
12.	What are callback functions in JavaScript?

callback function is the function passing into  anather function as an argument , which is invole inside to the outer function to complete some task.
ex:

 function fetchData(callback){
    setTimeout(()=>{
        const data = ["item1" ,"item2"];
        callback(data);
    },2000);
  }

  function displayData(data){
    console.log(data);
  }
  fetchData(displayData);

  -------------------------------------------------------
1.	What is the rest operator in JavaScript?
the rest oprator(...) allows a function to accept indifinte number of argument as an array, it is used a function paramenter
to garher all the remaing argument  in a single array.















    */
 