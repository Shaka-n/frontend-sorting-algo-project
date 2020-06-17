function selectionSort(arr){
    for(var i=0; i < arr.length; i++){
        var lowest = i
        for(var j=i+1; j<arr.length; j++){
            var shouldSwap = arr[j] < arr[lowest]
            if(shouldSwap){
                lowest = j
            }
        }
        console.log(arr)
        console.log("SWAPPING TO: ")
        var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest]=temp
        console.log(arr)
        console.log("**********************")
    }
    return arr;
}

arr = [4, 12, 10, 3, 17]
selectionSort(arr)