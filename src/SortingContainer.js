import React from 'react';
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'

export default class SortingContainer extends React.Component {

    state = {
        newArray: [],
        sortedArray: [],
        initCompare: null,
        secondaryCompare: null,
        shouldSwap: null
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
            newArray.push({id: i, value: this.randomIntervalInRange(10, 110)})
        }
        this.setState({ newArray })
    }

    generateBars = (object, idx) => {
        let bgColor
        let element = object.value * 6

        if ( idx === this.state.initCompare){
            bgColor = 'green'

            if(this.state.shouldSwap){
                bgColor = 'purple'
            }
        } else if(idx === this.state.secondaryCompare){
            bgColor = 'blue'
            
        } else{
            bgColor = 'red'
        }
        
        return <Bar
            key={object.id}
            style={{ 
                height: `${element}px`, 
                backgroundColor: bgColor , 
                transform:`translateX(calc(100% * ${idx}))`
            }}
            compare1={this.state.initCompare}
            compare2={this.state.secondaryCompare}
            />
    }

    sortButton = (arr, initCompare, secondaryCompare, shouldSwap) => {
        this.setState({
            sortedArray: [...arr],
            initCompare,
            secondaryCompare,
            shouldSwap
        })
    }

    // getUsers = () =>{
    //     fetch("http://localhost:3000/users")
    //     .then(resp => resp.json())
    //     .then(users=>console.log(users))
    //   }

    render() {
        console.log(this.state.newArray)
        return (
            <div>
                <Algorithm
                    newArray={this.state.newArray}
                    sortButton={this.sortButton}
                />
                    <button onClick={() => this.generateNewArray()}> Generate New Array</button>

                <div className="sorting-container">
                    {this.state.newArray.map((element, idx) => (
                        this.generateBars(element, idx)
                    ))
                    }
                </div>
            </div>
        )
    }
}