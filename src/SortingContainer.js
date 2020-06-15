import React from 'react';
import SortingCard from './SortingCard.js'
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'

export default class SortingContainer extends React.Component {

    state = {
        unSortedArray: [],
        sortedArray: [],
        initCompare: null,
        secondaryCompare: null,
        shouldSwap: false
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

    generateBars = (element, idx) => {
        // const divStyle = {height:element}
        let bgColor
        if ( idx === this.state.initCompare ){
            bgColor = 'green'
            if(this.state.shouldSwap){
                bgColor = 'purple'
            }
        } else if(this.state.secondaryCompare === idx){
            bgColor = 'blue'
        }else{
            bgColor = 'red'
        }
        
        //conditions to set background color
        return <Bar
            key={idx}
            style={{ height: element, backgroundColor: bgColor }}
            height={element}
            compare1={this.state.initCompare}
            compare2={this.state.secondaryCompare}
            />
    }

    sortButton = (arr, initCompare, secondaryCompare, shouldSwap) => {
        this.setState(prevState => ({
            sortedArray: arr,
            initCompare,
            secondaryCompare,
            shouldSwap
        }))
        console.log({
            sortedArray: arr,
            initCompare,
            secondaryCompare,
        })
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