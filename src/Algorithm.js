import React from 'react'

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class Algorithm extends React.Component{
    
    bubbleSort = async (arr) =>{
        let noSwaps
        for(let i=0; i<arr.length; i++){
            noSwaps = true
            for (let j = 0; j < arr.length; j++){
                let shouldSwap = arr[j+1] ? (arr[j].value > arr[j+1].value) : false
                if(shouldSwap) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    noSwaps = false
                }
                this.props.sortButton(arr, j, j+1, shouldSwap)
                await sleep(250)
            }
            if(noSwaps) break;
        }
        return arr
    }

    

    selectionSort = async (arr) =>{
        for(var i=0; i < arr.length; i++){
            var lowest = i
            for(var j=i+1; j<arr.length; j++){
                var shouldSwap = arr[j].value < arr[lowest].value
                if(shouldSwap){
                    lowest = j
                }
                await sleep(250)
                this.props.sortButton(arr, j, lowest, shouldSwap)
            }
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest]=temp
        }
        await sleep(250)
        this.props.sortButton(arr, j, lowest, shouldSwap)
        return arr;
    }

    merge(arr, arr1, arr2){
        let results = []
        let i = 0
        let j = 0

        let indexj = arr.indexOf(arr2[j])
                    
        let indexi = arr.indexOf(arr1[i])
    
        while( i < arr1.length && j<arr2.length){
            if(arr2[j] > arr1[i]){
                console.log(arr, "first while loop")
                console.log(indexj, arr2[j])
                console.log(indexi, arr1[i])
                results.push(arr1[i]);
                i++
            } else{
                console.log(arr, "second while loop")
                console.log(indexj, arr2[j])
                console.log(indexi, arr1[i])
                results.push(arr2[j])
                j++
            }
        }
        while (i < arr1.length){
            console.log(arr, "third while loop")
            console.log(indexi, arr1[i])
            results.push(arr1[i])
            i++;
        }
        while (j < arr2.length){
            console.log(arr, "fourth while loop")
            console.log(indexj, arr2[j])
            results.push(arr2[j])
            j++;
        }
        console.log(results)
        return results
    }
    
    mergeSort(arr){
        if(arr.length <= 1) return arr
        let mid = Math.floor(arr.length/2)
        let left = this.mergeSort(arr.slice(0, mid))
        let right = this.mergeSort(arr.slice(mid))
        return this.merge(this.props.newArray, left,right )
    }



    handleBubbleClick = () => {
        this.bubbleSort(this.props.newArray)
    }

    handleSelectionClick = () => {
        this.selectionSort(this.props.newArray)
    }

    handleMergeClick = () => {
        console.log(this.props.newArray)
        this.mergeSort(this.props.newArray)
        
    }

    
    
    render(){
        return(
            <div>
                <button onClick={()=> this.handleBubbleClick()}>Bubble Sort</button>
                <button onClick= {()=> this.handleSelectionClick()}>Selection Sort</button>
                <button onClick= {()=> this.handleMergeClick()}>Merge Sort</button>
            </div>
        )
    }
}