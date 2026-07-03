/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */

   const isprime=(num)=>{ if(num<=1){
       return false;
   }
     for(let i=2;i<num;i++){
         if(num%i==0){
             return false;
         }
     }
                                    
    returntrue;
}
//Example letnumber=17;
if(isprime(number)){
    console.log(number+"is a prime number"); 
}else{
    console.log(number+"is a not a prime number");}
    
    return false; // Change this return statement
};

// Export the function for the test cases
module.exports = isPrime;
