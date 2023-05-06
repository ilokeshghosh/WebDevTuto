const a=5;
const b=10;
let result=sum(a,b);
console.log("This is result ", result);

const x=90;
const y=10;

//calling function
result=sum(x,y);
console.log("This is result ", result);


//defining function
function sum(a, b){
    const sum=a+b;
    return sum;
    // console.log("The result ",sum);
}


//Function Expression
const square = function (num){
    return num * num;
};

console.log(square)
console.log(square(5))


//Nested Function
