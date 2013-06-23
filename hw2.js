#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var out = '';

for (var i = 2; i <= 100; i++) {
	if (isPrime(i)) {
		if (out != '') {
			out += ',';
		}
		out += i;
	}
}

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