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
                //also send over noSwaps so that we know when to set the entire array equal to
                // one color to demonstrate that the array is now completely sorted?
                // maybe not something to implement right away bc it could maybe cause problems
                // more so something to keep in mind and implement once we have all of our
                // sorts down
            }
            if(noSwaps) break;
        }
        return arr
    }

    /* change #3:
        Remove styleComparators function
    */
    styleComparators = (arr, idxOne, idxTwo) =>{
        document.getElementById()
    }
    ////////

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    handleClick = () =>{
        const sortedArray = this.bubbleSort(this.props.unSortedArray)
        /* change #2:
            why are we setting this equal to sortedArray?
            Should we remove "const sortedArray =" 
        */
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