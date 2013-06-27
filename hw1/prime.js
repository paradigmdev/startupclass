#!/usr/bin/env node
// Prime number generator
// Accepts varible n to see if that number is prime
var isPrime = function(n) {
  // If it's less than 2 it's not prime
  if(n < 2) { return false; }  

  // get the int version of square root
  var j = Math.floor(Math.sqrt(n));

  // loop though and 
  for(var i = 2; i <= j; i++) {
    if(n % i == 0) {
      return false;
    } else {
      return true;
    }
};

// Find first K prime numbers via basic for loop
var firstkprime = function(k) {
  var i = 1;
  var arr = [];
  for(i = 1; i < k+1; i++) {
    if isPrime(i) { arr.push(i); }
  }
  return arr;
};

// Print to console
var fmt = function(arr) {
  return arr.join(",");
};

var k = 100;
console.log("firstkprime(" + k + ")");
console.log(fmt(firstkprime(k)));


//var fs = require('fs');
//var outfile = "prime.txt";
//var out = "A startup is a business built to grow rapidly.\n"
//fs.writeFileSync(outfile, out);
//console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
