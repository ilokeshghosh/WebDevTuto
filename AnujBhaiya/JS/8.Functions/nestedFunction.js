function addSquares(a, b){

    const sa = square(a);
    const sb = square(b);
    function square(num){
        return num * num;
    }

    return sa + sb;
}

console.log(addSquares(3, 4));

// square(12); //This will throw error
