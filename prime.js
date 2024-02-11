let inputValue= 5;
let isprime=inputValue==1? false:true;  

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

console.log(`${inputValue} is ${isprime? 'prime':'not prime'} number`);
