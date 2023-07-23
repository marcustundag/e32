//create an array of unodered/unsorted data
//const data=[12,45,196,18,500,11,122,20,30,100];
const data=[12,45,196,18,500];
//create a selection sorting algorithm function using arrow function using arrow function
const bubbleSort = (data) =>{
        const length=data.length;
        let attempt=0;
        //create swap function
        const swap=(data, minIndex, maxIndex)=>{
            ([data[minIndex],data[maxIndex]]=[data[maxIndex],data[minIndex]]);
        }

        //looping for selecting element to b e compaired
        for (let index = 0; index < length; index++) {
           //looping for each candidita minimum nelement to be compaired with
            for( let cIndex=0; cIndex < length-1-index; cIndex++){
                attempt++;
                //conditional if the left value (max) is greater than right (min)
                if (data[cIndex]>data[cIndex+1]) {
                   swap(data,cIndex,cIndex+1);
                   console.log(data);
                } 
            }
            
        }
        console.log(attempt);
}

console.log(bubbleSort(data));