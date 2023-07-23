//creat array of data
const data=[2,4,67,8,44,6,12,20,100,10]
//create a function that will search a number from the array of data
function searchNumber(data,num){
    var attempt=0;
    
    for (let index = 0; index < data.length; index++) {
        if (data[index]===num){
                return `${num} is located of ${index} with ${index+1} attempt/s`;
        }  
        attempt++;
    }
    return `${num}number not found with ${attempt} attempt/s `
}
console.log(searchNumber(data,20));
console.log(searchNumber(data,1000));
//better version of searching
function searchNumberV2(data, num){
    let length = data.length;
    let left=0;
    let right=length-1;
    let index=-1;

    while(left<=right){
        //check the left side
        if(data[left]==num){
            index=left;
            return `${num} is located at index ${index} with ${left+1} attempt/s`;
        }
        //check the right side
        if(data[right]==num){
            index=right;
            return `${num} is located at index ${index} with ${length-right} attempt/s`;
            
        }
        //do the following after execution of code
        left++;
        right--;
    }
    if(index == -1){
        return `${num} is not found with ${left}attempt/s`;
    }
}

console.log(searchNumberV2(data,20));
//searchNumberV2(data,44);
console.log(searchNumberV2(data,6));
console.log(searchNumberV2(data,1000));