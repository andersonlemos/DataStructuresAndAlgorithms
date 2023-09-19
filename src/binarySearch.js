function binarySearch(array, item){
    let left = 0;
    let right = array.length - 1;
        
    while(left <= right){

        let mid = Math.floor((left + right)/2);
        let num = array[mid];

        if(num == item){
            return mid
        }else if(num > item){   
            right = mid - 1;
        }else{
            left =  mid +1
        }
    }
    return undefined; 
}

function binarySearchRecursive(array, left, right, item){

    if(right >= left){
        let mid = left + Math.floor((right - left)/2);
        
        if(array[mid] == item) {
           console.log("Achou")
           return mid
        };
        if(array[mid] > item) {
           console.log("Muito alto")
           return binarySearchRecursive(array, left, mid -1, item)
        }
        return binarySearchRecursive(array, mid + 1, right, item);
    }
  
    return undefined; 
}


module.exports = { binarySearch , binarySearchRecursive}

