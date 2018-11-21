import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import loading from './loading.gif';

const styles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  fadeOut: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  }
}
const loadingSteps = [
  "...",
  "sending info to server...",
  "Getting the thumbs up from the tech team...",
  "Grabbing a beer...",
  "wrapping up."
]


export default class ShipsSelect extends Component {
  constructor(props){
    super(props)
    this.loopThroughText = this.loopThroughText.bind(this)
    this.state = {
      redirect: false,
      animation: styles.fadeIn,
      currentStep: 0
    }

  }

  componentDidMount() {
    this.exit = setTimeout(() => this.setState({ animation: styles.fadeOut }), 3500)
    this.transition = setTimeout(() => this.setState({ redirect: true }), 5000)
    this.loadingText = setInterval(() => {
      let currentIdx = this.state.currentStep;
      this.setState({ currentStep: currentIdx + 1 });
    }, 1000);
  }
  loopThroughText(text){
    setTimeout(function(){
      console.log(text)
    }, 100 * (text + 1));
  }
  componentWillUnmount() {
    clearTimeout(this.exit)
    clearTimeout(this.transition)
    clearTimeout(this.loadingText)
  }

  render() {
    const { redirect } = this.state
    let statusText = loadingSteps[this.state.currentStep];

    if(redirect){
      return <Redirect to="/add-trip/add-ports" />
    } else {
      return (
        <StyleRoot>
        <div className="loading text-center" style={this.state.animation}>
            <img src={loading} alt="loading" />
            <h3 className="text-center" >Building You a Kick Ass Cruise</h3>
            <p>{statusText}</p>
        </div>
        </StyleRoot>
      );
    }
  }
}




