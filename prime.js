
function num(n) {
    if (n <= 1) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("Prime number");
}

num(9);

