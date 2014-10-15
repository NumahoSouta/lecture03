var multiply = function(a,b){
 var bunshi;
 var bunbo;

 if(Number.isInteger(b)){
  b = frac(b,1);
 }
 if(a.bunbo! = b.bunbo){
 bunshi = a.bunshi*b.bunshi;
 bunbo = a.bunbo*b.bunbo;
 }else{
  bunshi = a.bunshi*b.bunshi;
  bunbo = a.bunbo*b.bunbo;
 }

 var answer = frac(bunshi,bunbo);
 return answer;

};
