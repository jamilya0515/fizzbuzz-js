

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');
    console.log('Hello World!');
    for(let i=0; i<101; i++){
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else console.log(i);
    }



    // Put your code here...

    
}

// Now we run the main function...
fizzbuzz();

