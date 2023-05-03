import React, { useEffect, useState } from 'react';
import moment from 'moment';

import ItemClass from '../ItemClass/ItemClass';

export default class ItemSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(oldProps, oldState) {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const var1 = new Date().setHours(
      this.props.hoursGMT0 + this.props.hoursDiff
    );

    this.setState({
      time: new Date(var1).toLocaleTimeString('ru-RU'),
    });
  }

  render() {
    return (
      <div className="item">
        <div className="item-control">
          <button className="remove" onClick={this.props.onRemove}>
            X
          </button>
        </div>
        <div className="item-header">
          <div className="title">{this.props.title}</div>
        </div>
        <div className="item-body">
          <div className="clock">{this.state.time}</div>
        </div>
      </div>
    );
  }
}
