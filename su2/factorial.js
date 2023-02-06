// function factorial(){
//     let n=5,fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     console.log(fact);
// }
// factorial of a number using recursion 


let num= prompt("Enter a value")
let n=parseInt(num);

function factorial(n){
    
   
    if(n==0){
    return 1;
    }
    else
    return n*factorial(n-1)
}
console.log("Factorial of "+n+" is : "+factorial(n)) 
