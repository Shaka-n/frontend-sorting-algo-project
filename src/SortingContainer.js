import React from 'react';
import Algorithm from './Algorithm.js'
import Bar from './Bar.js'
import Slider from './Slider.js'

export default class SortingContainer extends React.Component {

    state = {
        newArray: [],
        sortedArray: [],
        initCompare: null,
        secondaryCompare: null,
        shouldSwap: null,
        mergeArr1: [],
        mergeArr2: [],
        arrSize: 10
    }

    handleArrSize = (arrSize) => {
        this.setState({ arrSize })
        this.generateNewArray(arrSize)
    }

    randomIntervalInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentDidMount() {
        this.generateNewArray(this.state.arrSize)
    }

    generateNewArray(arrSize) {
        let newArray = []
        for (let i = 0; i < arrSize; i++) {
            newArray.push({ id: i, value: this.randomIntervalInRange(10, 110) })
        }
        this.setState({ newArray })
    }

    generateBars = (object, idx) => {
        let bgColor
        let element = object.value * 6

        if (idx === this.state.initCompare) {
            bgColor = 'green'

            if (this.state.shouldSwap) {
                bgColor = 'purple'
            }
        } else if (idx === this.state.secondaryCompare) {
            bgColor = 'blue'

        } else if (idx === this.state.mergeArr1.find(id => id === idx)) {
            bgColor = 'teal'
        } else if (idx === this.state.mergeArr2.find(id => id === idx)) {
            bgColor = 'orange'
        }
        else {
            bgColor = 'red'
        }

        return <Bar
            key={object.id}
            style={{
                height: element,
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

    updateMergeSort = (mergedArray) => {
        this.setState(prevState => {
            // console.log(prevState.newArray)
            const target = prevState.newArray.find(e => mergedArray.find(e2 => e.id === e2.id))
            const targetIndex = prevState.newArray.indexOf(target)
            const firstPortion = prevState.newArray.slice(0, targetIndex)
            const secondPortion = prevState.newArray.slice(targetIndex + mergedArray.length, prevState.newArray.length)
            // console.log("first portion: ", firstPortion, "second portion: ", secondPortion)
            return { newArray: [...firstPortion, ...mergedArray, ...secondPortion] }
        })

    }

    visualizeSplit = (arr, arr1, arr2) => {

        let arr1Ids = []
        let arr2Ids = []
        for (var i = 0; i < arr1.length; i++) {
            arr1Ids.push(arr1[i].id)
        }

        for (var i = 0; i < arr2.length; i++) {
            arr2Ids.push(arr2[i].id)
        }
        this.setState({
            mergeArr1: arr1Ids,
            mergeArr2: arr2Ids,
            newArray: [...arr1, ...arr2]
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
                <Slider
                    onChange={this.handleArrSize}
                    value={this.state.arrSize}
                    options={[
                        10,
                        20,
                        30,
                        40,
                        50,
                        60,
                        70,
                        80,
                        90,
                        100,
                        110,
                    ]}
                    datalistID={'arrSize'}
                    min={10}
                />
                <Algorithm
                    newArray={this.state.newArray}
                    sortButton={this.sortButton}
                    visualizeSplit={this.visualizeSplit}
                    updateMergeSort={this.updateMergeSort}
                    resetState={this.resetState}
                />
                {/* <button onClick={() => this.generateNewArray()}> Generate New Array</button> */}

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