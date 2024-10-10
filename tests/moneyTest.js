import {formatCurrency} from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if(formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed'); 
}

console.log('works with zero');

if(formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed'); 
}

console.log('rounds up to the nearest cent');

if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed'); 
}

console.log('rounds up to the nearest cent');

if(formatCurrency(2000.4) === '20.00'){
  console.log('passed');
}else{
  console.log('failed'); 
}

/*
These are automated tests which means using code to test our code.
1. Basic test cases: tests if our code is working
2. Edge cases: test with values that are tricky.
Group of related tests is called a test suite.
*/
