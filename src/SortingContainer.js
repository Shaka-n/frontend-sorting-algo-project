import React from 'react';
import SortingCard from './SortingCard.js'
import Algorithm from './Algorithm.js'

export default class SortingContainer extends React.Component {

    state = {
        unSortedArray: [],
        sortedArray: []
    }

    randomIntervalInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentDidMount() {
        this.generateUnSortedArray()
    }

    generateUnSortedArray() {
        let unSortedArray = []
        for (let i = 0; i < 10; i++) {
            unSortedArray.push(this.randomIntervalInRange(10, 110))
        }
        this.setState({ unSortedArray })
    }

    generateBars = (element, idx) =>{
        const divStyle = {height:element}
        return <div key={idx} className='bar' style={divStyle} >
            {/* {element} */}
        </div>
    }

    sortButton = (arr) => {
        console.log("Unsorted Array:", this.state.unSortedArray)
        console.log("Sorted Array:", arr)
        // let bubbleSortArr = []
        // bubbleSortArr.push(arr)
        // console.log(bubbleSortArr)
        this.setState(prevState =>({
            sortedArray: arr
        })
        )
    }

    

    render() {
        return (
            <div>
                <Algorithm 
                    unSortedArray={this.state.unSortedArray} 
                    sortButton={this.sortButton}
                />
                <div className="sorting-container">
                    {this.state.unSortedArray.map((element, idx) => (
                        this.generateBars(element * 6, idx)
                    ))
                    }
                </div>
            </div>
        )
    }
}