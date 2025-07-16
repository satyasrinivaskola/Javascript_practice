
function large_num(num){
   var large=num[0]
   for(i=0;i<num.length;i++){
   for (let char of num){
    if(char>large){
        large=char
    }
    return large
   } 
}}
console.log(large_num([1,6,9,4]));