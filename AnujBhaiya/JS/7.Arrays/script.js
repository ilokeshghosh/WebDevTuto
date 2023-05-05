const names=[
    "lokesh", "ghosh", 12, true,

            {
                name:"lg",
            },

            function hello(){
                console.log("hello World");
            }
        ];
console.log(names);
console.log(names[1]);
console.log(names[3]);
console.log(names[5]);

console.log(names.length)
const newNames = names;
newNames[2]= 44;
console.log(names)
console.log(newNames)

console.log(names.indexOf(44));
names.push("20")
console.log(newNames);
names.pop()
console.log(newNames);
names.sort()
console.log(newNames)

