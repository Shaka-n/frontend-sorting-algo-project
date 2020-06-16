import React from 'react';
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'

export default class SortingContainer extends React.Component {

    state = {
        newArray: [],
        sortedArray: [],
        initCompare: null,
        secondaryCompare: null,
        shouldSwap: false
    }

    randomIntervalInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentDidMount() {
        this.generateNewArray()
    }

    generateNewArray() {
        let newArray = []
        for (let i = 0; i < 10; i++) {
            newArray.push(this.randomIntervalInRange(10, 110))
        }
        this.setState({ newArray })
    }

    generateBars = (element, idx) => {
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
    }



    render() {
        return (
            <div>
                <Algorithm
                    newArray={this.state.newArray}
                    sortButton={this.sortButton}
                />
                    <button onClick={() => this.generateNewArray()}> Generate New Array</button>

                <div className="sorting-container">
                    {this.state.newArray.map((element, idx) => (
                        this.generateBars(element * 6, idx)
                    ))
                    }
                </div>
            </div>
        )
    }
}