function solution(my_string, is_suffix) {
    var answer = 0;
    
   for(let i = 0; i < my_string.length; i++) {
       const slicedStr = my_string.slice(i)
       if(slicedStr === is_suffix) {
           answer = 1
       }
   }
    
    return answer;
}