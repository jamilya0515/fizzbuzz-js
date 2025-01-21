

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');
    console.log('Hello World!');
    for(let i=0; i<101; i++){
        if (i % 15 == 0) // if the number is a multiple of both 3 and 5 print FizzBuzz
            console.log("FizzBuzz");
        else if (i % 5 == 0) // if the number is a multiple of 5 print Buzz
            console.log("Buzz");
        else if (i % 3 == 0) // if the number is a multiple of 3 print Fizz
            console.log("Fizz");
        else console.log(i);
    }



    
}

// Now we run the main function...
fizzbuzz();

