import React, { Component } from 'react';

class Type extends Component {
  text = 'rrrrrrrad';
  state = {
    text: ''
  };

  componentDidMount() {
    const array = this.text.split('');
    this.typeWriter(array, 0);
  }

  typeWriter = (arr, i) => {
    if (i === arr.length) {
      setTimeout(() => {
        this.setState({ text: '' });
        this.typeWriter(arr, 0);
      }, 500);
    } else {
      this.setState({ text: this.state.text + arr[i] });
      setTimeout(() => {
        this.typeWriter(arr, i + 1);
      }, 150);
    }
  };

  render() {
    return <span>{this.state.text}</span>;
  }
}

export default Type;
