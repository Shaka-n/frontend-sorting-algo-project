import React from 'react';
import SortingCard from './SortingCard.js'

export default class SortingContainer extends React.Component {

    state = {
        unSortedArray: []
    }

    randomIntervalInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentDidMount() {
        this.generateUnSortedArray()
    }

    generateUnSortedArray() {
        let unSortedArray = []
        for (let i = 0; i < 100; i++) {
            unSortedArray.push(this.randomIntervalInRange(0, 100))
        }
        this.setState({ unSortedArray })
    }


    render() {
        return (
            <div>
                {this.state.unSortedArray.map((element, idx) => (
                    <div key={idx}>
                        {element}
                    </div>
                ))
                }
            </div>
        )
    }
}