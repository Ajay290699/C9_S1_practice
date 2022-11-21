// Write your fibonacci series solution code here
let x = 0;
let y = 1;

console.log(x,y);
for(let i = 0; i<8; i++){
    let z= x+y;
    x= y;
    y = z
    console.log(z);
}