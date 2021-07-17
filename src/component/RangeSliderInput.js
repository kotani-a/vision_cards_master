import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import css from '../css/RangeSliderInput.module.css';

const CustomTextField = withStyles(() => ({
  root: {
    width: '80px',
    minWidth: '60px',
    '& .MuiInputLabel-root': {
      backgroundColor: '#fcfcfc'
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '0',
      border: '1px solid #1b1515',
      '& input': {
        padding: '10.5px 8px'
      }
    }
  },
}))(TextField);


const CustomSlider = withStyles(() => ({
  root: {
    margin: '0 8px'
  },
}))(Slider);

class RangeSliderInput extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  changeInput (e, id) {
    const {
      value,
      onChangeEvent
    } = this.props
    onChangeEvent([e.target.value, value[1]], id)
  }

  capitalizeStringAndAddText (text, addText) {
    return `${addText}${text.charAt(0).toUpperCase() + text.slice(1)}`
  }

  render () {
    const {
      id,
      label,
      value,
      max,
      step,
      onChangeEvent,
      onChangeInputEvent,
      wrapMargin
    } = this.props
    return (
      <div
        className={css.RangeSliderInputWrap}
        style={{ margin: wrapMargin }}>
        <div className={css.label}>{label}</div>
        <div className={css.inputsWrap}>
          <CustomTextField
            id={`${id}-min`}
            value={value[0]}
            label="最小"
            type="Number"
            color="secondary"
            variant="outlined"
            size="small"
            autoComplete="off"
            onChange={event => onChangeInputEvent(event, id)}
          />
          <CustomSlider
            value={value}
            step={step}
            max={max}
            aria-labelledby="range-slider"
            marks
            color="secondary"
            onChange={(event, newValue) => onChangeEvent(newValue, id)}
          />
          <CustomTextField
            id={`${id}-max`}
            value={value[1]}
            label="最大"
            type="Number"
            color="secondary"
            variant="outlined"
            size="small"
            autoComplete="off"
            onChange={event => onChangeInputEvent(event, this.capitalizeStringAndAddText(id, 'max'))}
          />
        </div>
      </div>
    )
  }
}

export default RangeSliderInput;
