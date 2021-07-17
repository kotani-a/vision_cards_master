import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import css from '../css/SliderInput.module.css'

class SliderInput extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const {
      id,
      label,
      value,
      step,
      onChangeEvent,
      wrapMargin
    } = this.props
    return (
      <div
        className={css.sliderWrap}
        style={{ margin: wrapMargin }}>
        <span className={css.label}>{label}</span>
        <Slider
          value={value}
          step={step}
          marks
          color="secondary"
          onChange={(event, newValue) => onChangeEvent(newValue, id)}
        />
    </div>
    )
  }
}

export default SliderInput;
