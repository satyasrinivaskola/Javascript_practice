
function large_num(num){
   let large=num[0]
   for(i=0;i<num.length;i++){
   for (var char of num){
     if(char>large){
        large=char
     }
   
   } 
   
return large
}}


console.log(large_num([6,9,4]));