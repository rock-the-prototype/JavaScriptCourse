function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let fib = 0;
    let prevFib = 1;
    let prevPrevFib = 0;
    for (let i = 2; i <= n; i++) {
        fib = prevFib + prevPrevFib;
        prevPrevFib = prevFib;
        prevFib = fib;
    }
    return fib;
}

console.log(fibonacci(6)); // Outputs 8