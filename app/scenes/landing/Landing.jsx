import './Landing.scss';
import './Glitch.scss';

import { Button, Form, Input, Select, Typography } from 'antd';
import React, { Component } from 'react';

import image from './assets/gallery-69-11.jpg';

class Landing extends Component {
  render() {
    const {
      Title
    } = Typography;
    return (
      <div className="Landing Glitch">
        <img style={{ width: '100%' }} src="https://absurd.design/assets/img/gallery-69-10.jpg" />
        <Title style={{ fontFamily: 'Playfair Display' }}>Matt &amp; Joel's Wedding</Title>
        <p>Friday, May 9th - Sunday, May 11th<br />Sacramento, California</p>
        <div className="content">
          <div className="glitch">
            <div className="glitch__img"></div>
            <div className="glitch__img"></div>
            <div className="glitch__img"></div>
            <div className="glitch__img"></div>
            <div className="glitch__img"></div>
          </div>
			  </div>
        <Form>
          <Form.Item>
            <Select
              showSearch
              placeholder="Start typing your name"
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              notFoundContent={null}
            >
              {[
                { value: 'zehnder.matt@gmail.com', text: 'Matthew Zehnder' }
              ].map(d => <Select.Option key={d.value}>{d.text}</Select.Option>)}
            </Select>
          </Form.Item>
          <Button style={{ width: '100%' }} type="default">Continue</Button>
        </Form>
      </div>
    );
  }
}

export default Landing;