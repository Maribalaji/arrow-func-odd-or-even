let a=parseInt(prompt("Enter a number"));
let check=(a)=>{
    if(a%2==0){
        return `It is Even Number`
    }
    else{
        return `It is Odd Number`
    }
}
let result=check(a);
console.log(result);
document.write(`The given Number is ${a} and ${result}`);