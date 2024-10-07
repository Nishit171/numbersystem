//write a code to find prime numbers
function isPrime(num){
    if(num <=1) return false ;
    for(let i =2;i<= Math.sqrt(num);i++){
        if(num % i ===0) return false;
    }
    return true;
}
 function findPrimeInArray (numbers){
    let primeArray = [];

    for(let i = 0; i<=numbers.length-1;i++){
        if(isPrime(numbers[i])){
            primeArray.push(numbers[i]);
        }
    }
    return primeArray;
 }
 let max = primeArray[0];
 let min = primeArray[0];

 for(let i =0; i<=primeArray.length-1;i++){
    if(primeArray[i] > max){
        max = primeArray[i];
    }
    if(primeArray[i] < min){
        min = primeArray[i];
    }
    
 }
 console.log("maximum :",max);
 console.log("minimum :", min);
let sum = 0;

for(i=0;i<=primeArray.length-1;i++){
    sum = sum + primeArray[i];
}
console.log(sum);
