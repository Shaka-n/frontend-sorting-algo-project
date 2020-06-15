import React from 'react'

export default class Algorithm extends React.Component{
    
    bubbleSort = async (arr) =>{
        
        for(var i=0; i<arr.length; i++){
            // window.setTimeout(()=>this.props.sortButton(arr),2000)
            for (var j = 0; j < arr.length; j++){
                // callback(arr, j, j+1)
                var shouldSwap = arr[j] > arr[j+1]
                if(shouldSwap) {
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
                await this.sleep(250)
                this.props.sortButton(arr)
            }
        }
        return arr
    }

    styleComparators = (arr, idxOne, idxTwo) =>{
        
    }

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    handleClick = () =>{
        const sortedArray = this.bubbleSort(this.props.unSortedArray)
        
    }
    
    
    render(){

        return(
            <div>
                <button onClick={()=>this.handleClick()}>Sort</button>
            </div>
        )
    }
}