// Without memoization
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(40)); // Takes a very long time to execute!

// With memoization
function fibonacciMemoized(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibonacciMemoized(n-1, memo) + fibonacciMemoized(n-2, memo);
    return memo[n];
}

console.log(fibonacciMemoized(40)); // Returns almost instantly!