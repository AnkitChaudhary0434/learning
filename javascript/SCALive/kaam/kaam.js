let n = 7
let i;

for (i = 2;i<=n;i++){
    if(i == n){
        console.log(`${n} is a prime no`)
    }
    else if (n%i==0){
        console.log(`${n} is not a prime number`);
        
    }
}


