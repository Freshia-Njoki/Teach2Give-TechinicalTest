// Write a program to generate the Fibonacci sequence up to 100.

function Fibonacci(){
    
    let Num1 = 0;
    let Num2 = 1;
    let Num3;

    
    console.log(Num1);
    console.log(Num2);
    do{
        Num3 = Num1 + Num2;
        
        
        if(Num3 <= 100){
            Num1 = Num2;
            Num2 = Num3;
            console.log(Num3);
        }
    }
    while(Num3 <= 100);
}
Fibonacci();