import React from 'react';
import SortingCard from './SortingCard.js'
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'

export default class SortingContainer extends React.Component {

    state = {
        unSortedArray: [],
        sortedArray: [],
        initCompare: '',
        secondaryCompare: ''
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
        // const divStyle = {height:element}
        return <Bar 
        key={idx} 
        style={{height:element}} 
        height={element}
        compare1={this.state.initCompare} 
        compare2={this.state.secondaryCompare}/>
    }

    sortButton = (arr) => {
        console.log("Unsorted Array:", this.state.unSortedArray)
        console.log("Sorted Array:", arr)
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