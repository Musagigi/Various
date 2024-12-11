let i = 0
const stars = (n) => {
   while (i !== n){
       if (i % 2 === 0){
           console.log(i, 'четное');
       }
       else{
           console.log(i, 'нечетное');
       }
       i += 1;
   }
}  
stars(5);