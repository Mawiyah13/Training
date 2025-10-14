//intro
console.log("hello world")

//object
let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2.age);

//function
//function sum(a,b){
//    console.log(a+b);
//}
//sum(28,46);
//arrow function
//const sum1=(a,b,c)=>{
//    console.log(a+b+c);
//}
//sum1(34,27,12);

function double(num){
    return num*2;
}

//map method
let arr = [2,3,4,5,6,7]
let doubledArr=arr.map(double);
console.log(doubledArr);
const tripledArr = arr.map((n)=>n*3);
console.log(tripledArr);

//filter method
function odd(num) {
    if(num%2 == 0) {
        console.log("false");
    }
    else {
        console.log("true");
    }
}
//let oddNumbers = arr.filter(odd);
//console.log(oddNumbers);
//odd(10);
//odd(31);
//odd(0);

//arrow function
let array = [13,15,20,35,27];
const multiple = (num)=>{
    if(num%5 == 0) {
        console.log(true)
    }
    else {
        console.log(false);
    }
}
multiple(40);

//reduce method
let array1=[1,2,3,4,5,6];
let ans =array1.reduce((product,current)=>{
    return product*current
},1);
console.log(ans);

//all method
let a = [1,2,3,4,5,6]
let all=a.map((n)=>n*3).filter((n)=>n%2==0).reduce((sum,cur)=>{
    return sum+cur;
},0)
console.log(all);

//restructuring
let b = [1,2,3,4,5]
const [one,three,two] = b;
console.log(two);

//rest variable
const [x,...y] = b;
console.log(y);

//spread variable
let num1 = [0,...b,6,7];
console.log(num1);

//merge spread
const obj1={x:3,y:5}
const obj2={y:6,z:7}
const spread={...obj1,...obj2}
console.log(spread);

//async
async function fetchApi(){
    try{
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
    )
        const data = await response.json();
        data.map((user) =>
             {
            console.log(user.name)
        })
    }
        catch(error){
    console.log(error);
     }   
     
}
fetchApi();
//promise
const { log } = require("console");
const { response } = require("express");

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          const success = true;
//          if(success){
//             resolve('resolved successfully');
//          }
//          else{
//             reject('rejected');
//          }
//     })
// },2000); //macrotasks
// // console.log('Before execution'); //microtasks
// promise.then((result)=>console.log(result))
//         .catch(err=>console.log(err)
//     )
// .finally(()=>{console.log('promises completed')})
// console.log('After promises execution');


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{return response.json()})
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{return response.json()})
// .then((data)=>data.map((user)=>{console.log(user.name)}))
// .catch((err)=>console.log(err))


let obj3 = {name:"Mawiyah",age:21,country:"India"};
console.log(obj3.name);

//string literals

let name = 'Mawiyah'
let age = 21;
console.log(`I'm ${name} and my age is ${age}`);

//stack function
const mul =(a,b)=>{
    return a*b;
}
const square =(n)=>{
    return mul(n,n);
}
const print = (n)=>{
    let s = square(n);
    console.log(s);
}
print(4);
console.log('first');
Promise.resolve().then(console.log('From promises'))
setTimeout(()=>{
    console.log('Inside Timeout');
},2000)
console.log('last')