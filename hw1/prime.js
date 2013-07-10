#!/usr/bin/env node

// Prime number generator
// Accepts varible n to see if that number is prime
function isPrime(n) {
    if (n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2;i <= m;i++) if (n % i == 0) return false;
    return true;
}

// Find first K prime numbers via basic for loop
var firstKPrime = function(k) {
    var arr = [];
    var i = 1;
    while (arr.length < k) {
        if(isPrime(i)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

// Write to the file
var k = 100;
var fs = require('fs');
var outfile = "prime.txt";
var out = fmt(firstKPrime(k));
fs.writeFileSync(outfile, out);