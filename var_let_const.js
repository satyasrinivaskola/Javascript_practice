function check(){
    if(true){
       var message="Hello Code"//functional scope
       let message1="Hello coders"//block scope
       const mes="Hello Message"//not changeable
        console.log(message);
     console.log(message1);
    
    }
     m1=message+"satya"
     m2=mes+"kola333"
     console.log(mes);
     console.log(m1);
        console.log(m2)
    console.log(message);
     console.log(message1);
}
check()
