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

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    handleClick = () => {
        this.bubbleSort(this.props.newArray)
    }
    // change this.handleClick to this.BubbleClick, we are going to have a button for each sort
    
    render(){
        return(
            <div>
                <button onClick={()=>this.handleClick()}>Bubble Sort</button>
            </div>
        )
    }
}