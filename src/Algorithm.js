import React from 'react'

export default class Algorithm extends React.Component{
    
    bubbleSort = async (arr) =>{
        var noSwaps
        for(var i=0; i<arr.length; i++){
            noSwaps = true
            for (var j = 0; j < arr.length; j++){
                var shouldSwap = arr[j] > arr[j+1]
                if(shouldSwap) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    noSwaps = false
                }
                await this.sleep(250)
                this.props.sortButton(arr, j, j+1, shouldSwap)
            }
            if(noSwaps) break;
        }
        return arr
    }

    selectionSort = async (arr) =>{
        for(var i=0; i < arr.length; i++){
            var lowest = i
            for(var j=i+1; j<arr.length; j++){
                var shouldSwap = arr[j] < arr[lowest]
                if(shouldSwap){
                    lowest = j
                }
                await this.sleep(250)
                this.props.sortButton(arr, j, lowest, shouldSwap)
            }
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest]=temp
        }
        await this.sleep(250)
        this.props.sortButton(arr, j, lowest, shouldSwap)
        return arr;
    }



    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    handleBubbleClick = () => {
        this.bubbleSort(this.props.newArray)
    }

    handleSelectionClick = () => {
        this.selectionSort(this.props.newArray)
    }

    
    
    render(){
        return(
            <div>
                <button onClick={()=> this.handleBubbleClick()}>Bubble Sort</button>
                <button onClick= {()=> this.handleSelectionClick()}>Selection Sort</button>
            </div>
        )
    }
}