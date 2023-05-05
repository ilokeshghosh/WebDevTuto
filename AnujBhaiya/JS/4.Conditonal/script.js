const age=20;

if(age>=18){
    console.log("You can Vote")
}else{
    console.log("You can't Vote");
}


const marks=56;

if(marks>90){
    console.log("A+");
}else if(marks>80){
    console.log("A");
}else if(marks>70){
    console.log("B+")
}else if(marks>50){
    console.log("B")
}else{
    console.log("you failed")
}


//Ternary Operator
const mark=50;
const result = mark >= 40 ? "passed" : "Failed";
console.log(result);

console.log(mark >= 40 ? "passed" : "Failed");