// Closures 

// Question 1
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
const createHelloWorld = function() {
    return function(...args) {
        return "Hello World";    
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


// Question 2
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        // this will return 10 and then will return 11 then 12 etc because we are incrementing 10 by using "n++"
        return n++; 
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


// Question 3
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    // each function is defined to the methods we've created 
    return {
        increment: increment,
        decrement: decrement, 
        reset: reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// Basic Array Transformations

// Question 4 

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Solved Using Array.Map method 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map(fn);
};

// Solved using a for loop 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
// passing a function into another function is an example of strategy design pattern 


    // of will iterate every value in the array 
    for (const i in arr) {
        // push is how you append to the end of an array
        res.push(fn(arr[i], Number(i)));
    }
    // return the result 
    return res;
};


// Question 5 

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

// solved using the array.filter method 

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // declaritive programming 
    return arr.filter(fn);
};

// solved without using array.filter method 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // imperative programming
    for (const i in arr) {
        // iterate through the array to see if the variable meets the statement 
        if (fn(arr[i], Number(i))) {
            res.push(arr[i])
        }
    }
    return res;
};

// Question 6 

// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// Solved using the array.reduce method 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};


// solved using a for loop 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // our result is going to be whatever the initial value is thats passed in 
    let res = init;

    // now we want to go through every number in the array 
    for (const n of nums) {
        // for each value we want to call that function and then update our result
        // I want to pass in the res into the function because i want to add the previous result for each iteration through the array 
        res = fn(res, n)
    }
    // return the result 
    return res;
};


// solved using a for.each function 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;

    // for.each function iterates through each number in the array so I create the function and then pass n as the parameter to hit each number in the array 
    nums.forEach((n) => {
        // update our result so we can set it to the function being called 
        res = fn(res, n)
    });
    // return the result 
    return res;

};


// Function Transformations 

// Question 7 
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        // I want to go through the list of functions in reverse order 
        // for every function of the list of functions we want to apply them to the value x  
        for (const fn of functions.reverse()) {
        // and then accumlate them in reverse order 
            x = fn(x);
        }
        // return the value of x 
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Question 8 

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */

// the once function is taking in a single parameter that is another function  and then returning another function as the result once is called making it a higher order function 
var once = function(fn) {
    // using closure, i created a boolean to let me know when the function is called 
    let called = false;

    return function(...args){
        // if the called is true then we return undefined and we dont want to call it again 
        if (called) {
            return undefined;
        }
        // otherwise, we do want to call it again using the spread operator 
        called = true;
        // return the calculated value 
        return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


// Question 9 

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

/**
 * @param {Function} fn
 */

// we have this wrapper function that is going to add content or add functionality to whatever function we pass in 
function memoize(fn) {
    // create a state to call the function, i made it a const because its going to be an object 
    const cache = {};

    // the ...args is an arbitruary number of paramater 
    return function(...args) {
        // JSON takes an object and converts it into a string to then we can use as a key in our hash map
        const key = JSON.stringify(args);
        // now we check if the key already inserted in our cache 
        if (key in cache) {
            // if it is then we simply return the key in the cache 
            return cache[key];
        } 
        // if its not then we compute it so the cache equals the function and then return the key in they cache 
        cache[key] = fn(...args);
        return cache[key];
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


//  Promises and Time 
//  QUestion 10 

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        //  return a promise 
        return new Promise((resolve, reject) => {
            // pass in a method that calls reject 
            // we are telling setTimeout to execute this code on this amount of time 
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
            // use .then that accepts a function to get the result of fn(..args) 
                .then((res) => resolve(res))
                // there might be an error thrown so we want to catch it and call reject to catch the error 
                .catch((err) => reject(err))
        // run a cleartimeout function to stop the execution of the setTimeout function after the called period of time 
        // .finally is a promise that handles the clearTimeout for us 
                .finally(() => clearTimeout(id));
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */