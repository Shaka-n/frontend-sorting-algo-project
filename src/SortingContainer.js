import React from 'react';
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'

export default class SortingContainer extends React.Component {

    state = {
        newArray: [],
        sortedArray: [],
        initCompare: null,
        secondaryCompare: null,
        shouldSwap: null,
        mergeArr1: [],
        mergeArr2: []
    }
    //add new state that takes in arrays for visuals

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

    //every element in my array has a bar associated with it, bars have a position
    generateBars = (object, idx) => {
        let bgColor
        let element = object.value * 6

        // switch(idx){
        //     case this.state.initCompare:
        //         bgColor = 'green';
        //         if (idx===this.state.shouldSwap){
        //         bgColor = 'purple';}
        //         break;
        //     case this.state.secondaryCompare:
        //         bgColor = 'blue';
        //         break;
        //     default:
        //         bgColor = 'red';
        // }

        if ( idx === this.state.initCompare){
            bgColor = 'green'

            if(this.state.shouldSwap){
                bgColor = 'purple'
            }
        } else if(idx === this.state.secondaryCompare){
            bgColor = 'blue'
            
        } else if( idx === this.state.mergeArr1.find(id => id === idx)){
            bgColor = 'teal'
        } else if ( idx === this.state.mergeArr2.find(id => id === idx)){
            bgColor = 'orange'
        }
        else{
            bgColor = 'red'
        }
        
        return <Bar
            key={object.id}
            style={{ 
                height: `${element}px`, 
                backgroundColor: bgColor 
                // transform:`translateX(calc(100% * ${idx}))`
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

    visualizeSplit = (arr, arr1, arr2) =>{
        let arr1Ids= []
        let arr2Ids = []
       for (var i=0; i < arr1.length; i++){
            arr1Ids.push(arr1[i].id)
        }

        for (var i=0; i < arr2.length; i++){
            arr2Ids.push(arr2[i].id)
        }
        this.setState({
            mergeArr1: arr1Ids,
            mergeArr2: arr2Ids
        })
        console.log("Arr 1 Ids:", arr1Ids)
        console.log("Arr 2 Ids:", arr2Ids)
    }

    // getUsers = () =>{
    //     fetch("http://localhost:3000/users")
    //     .then(resp => resp.json())
    //     .then(users=>console.log(users))
    //   }

    render() {
        // console.log(this.state.newArray)
        return (
            <div>
                <Algorithm
                    newArray={this.state.newArray}
                    sortButton={this.sortButton}
                    visualizeSplit={this.visualizeSplit}
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