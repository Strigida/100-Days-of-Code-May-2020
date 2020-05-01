function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [startNum];
  } else {
    var nums = rangeOfNumbers(startNum, endNum - 1);
    nums.push(endNum);
    return nums;
  }
  
};

console.log(rangeOfNumbers(1, 6));