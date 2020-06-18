import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class VolumeSlider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
  render() {
    let { volume } = this.state
    return (
      <Slider
        value={volume}
        orientation="vertical"
        onChange={this.handleOnChange}
      />
    )
  }
}