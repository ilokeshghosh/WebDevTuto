const grade="D";

switch (grade) {
    case "A":
        console.log("You got A")
        break
    case "B":
        console.log("You got B")
        break
    case "C":
    case "D":
        console.log("very bad")
        break
    default:
        console.log('You got nothing')
        break;
}