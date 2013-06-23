#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";

var primes = new Array();
var i = 2;
while (primes.length < 100) {
	if (isPrime(i)) {
		primes.push(i);
	}
	i++;
}

var out = primes.join(',');

fs.writeFileSync(outfile, out + "\n");  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

function isPrime(number) {
	for (var i = number - 1; i > 1; i--) {
		var factor = number / parseFloat(i);
		if (factor % 1 === 0) {
			return false;
		}
	}

	return true;
}