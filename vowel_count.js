function vowel_count(str){
    const vowel="aeiouAEIOU";
    let count=0;

    for (char of str){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count

}
console.log(vowel_count("Hello World satya")); // Output: 3