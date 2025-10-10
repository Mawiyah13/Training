console.log("hello world")
let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2.age);
function sum(a,b){
    console.log(a+b);
}
sum(28,46);
const sum1=(a,b,c)=>{
    console.log(a+b+c);
}
sum1(34,27,12);