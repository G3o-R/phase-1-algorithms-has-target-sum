function hasTargetSum(array,target){
  let  sums = []

  console.log(`should be sorted ${array}`)
  array.forEach((item) =>{
    const complement = target - item
   // console.log(`${complement}`)
    if(array.indexOf(complement) > -1){
       return sums.push(complement)
      
        
  }})
    if(sums.length >=2){return true}
    else{return false}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
