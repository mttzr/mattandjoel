import React, { Component } from 'react';

import { Typography } from 'antd';
import image from './assets/gallery-69-11.jpg';

class Landing extends Component {
  render() {
    const {
      Title
    } = Typography;
    return (
      <div>
        <img src={image} />
        <Title>Joel Aguero</Title>
        <p>I live &amp; work in San Francisco and Boston.</p>
      </div>
    );
  }
}

export default Landing;