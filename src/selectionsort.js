function selectionSort(arr){
    for(var i=0; i < arr.length; i++){
        var lowest = i
        for(var j=i+1; j<arr.length; j++){
            var shouldSwap = arr[j] < arr[lowest]
            if(shouldSwap){
                lowest = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest]=temp
    }
    return arr;
}