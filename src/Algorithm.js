import React from 'react'

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default class Algorithm extends React.Component {

    bubbleSort = async (arr) => {
        let noSwaps
        for (let i = 0; i < arr.length; i++) {
            noSwaps = true
            for (let j = 0; j < arr.length; j++) {
                let shouldSwap = arr[j + 1] ? (arr[j].value > arr[j + 1].value) : false
                if (shouldSwap) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    noSwaps = false
                }
                this.props.sortButton(arr, j, j + 1, shouldSwap)
                await sleep(250)
            }
            if (noSwaps) break;
        }
        return arr
    }



    selectionSort = async (arr) => {
        for (var i = 0; i < arr.length; i++) {
            var lowest = i
            for (var j = i + 1; j < arr.length; j++) {
                var shouldSwap = arr[j].value < arr[lowest].value
                if (shouldSwap) {
                    lowest = j
                }
                await sleep(250)
                this.props.sortButton(arr, j, lowest, shouldSwap)
            }
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
        await sleep(250)
        this.props.sortButton(arr, j, lowest, shouldSwap)
        return arr;
    }

    insertionSort = async(arr) => {
        for(var i = 1; i < arr.length; i++){
            var currentVal = arr[i].value;
            for(var j=i-1; j>= 0 && arr[j].value > currentVal; j--){
                arr[j+1].value = arr[j].value
                await sleep(250)
                this.props.sortButton(arr, j, i, true)
            }
            arr[j+1].value = currentVal
        }
        await sleep(250)
        this.props.sortButton(arr, j, i, true)
        return arr
    }

    // insertionSort = async (arr) => {
    //     let shouldSwap;
    //     console.log(arr)
    //     for (var i = 1; i < arr.length; i++) {
    //         var currentVal = arr[i];
    //         for (var j = i - 1; j >= 0 && arr[j].value > currentVal.value; j--) {
    //             shouldSwap = true
    //             arr[j + 1] = arr[j]
    //             console.log(arr)
    //             await sleep(250)
    //             this.props.sortButton(arr, arr[i].id, arr[j].id, shouldSwap)
    //         }
    //         arr[j + 1] = currentVal;
    //         shouldSwap = false
    //         console.log(arr)
    //     }
    //     return arr
    // }

    merge = async (arr, arr1, arr2) => {
        // console.log(arr)
        // console.log(arr1)
        // console.log(arr2)
        let results = []
        let i = 0
        let j = 0
        while (i < arr1.length && j < arr2.length) {
            // highlight arr1[i] and arr2[j]
            if (arr2[j].value > arr1[i].value) {
                results.push(arr1[i]);
                i++
            } else {
                results.push(arr2[j])
                j++
            }
        }
        while (i < arr1.length) {
            results.push(arr1[i])
            i++;
        }
        while (j < arr2.length) {
            results.push(arr2[j])
            j++;
        }
        // this.props.sortButton(arr, arr1[i], arr2[j])
        // this.props.visualizeSplit(arr, arr1, arr2)
        await sleep(250)

        return results
    }

    mergeSort = async (arr) => {
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = await this.mergeSort(arr.slice(0, mid))
        let right = await this.mergeSort(arr.slice(mid))
        // this.props.visualizeSplit(arr, left, right)
        // return
        const res = await this.merge(arr, left, right)
        this.props.updateMergeSort(res)
        return res
    }

    // update the screen before return results
    // all we need to figure out is which fraction of our total image
    // is results responding to

    // store a global variable, corresponds to number of calls to merge, everytime u call merge
    //that number increases, and you can map the value of the global variable to the position in your array
    // where u should update results

    // id tells you which bars should be shifted, which bars we need to move, which bars must be rerendered

    // everytime doing merge, find which index is at the beginning and which idx is at the end,
    // before u do the merge call, line 56

    // look into the 2 arrays, find lowest position and highest positions of those values, that will tell you
    // what range u need to update in ur picture
    handleBubbleClick = () => {
        this.bubbleSort(this.props.newArray)
    }

    handleSelectionClick = () => {
        this.selectionSort(this.props.newArray)
    }

    handleInsertionClick = () => {
        this.insertionSort(this.props.newArray).then(console.log)
    }

    handleMergeClick = () => {
        this.mergeSort(this.props.newArray)
    }



    render() {
        return (
            <div>
                <button onClick={() => this.handleBubbleClick()}>Bubble Sort</button>
                <button onClick={() => this.handleSelectionClick()}>Selection Sort</button>
                <button onClick={() => this.handleInsertionClick()}>Insertion Sort</button>
                <button onClick={() => this.handleMergeClick()}>Merge Sort</button>
            </div>
        )
    }
}