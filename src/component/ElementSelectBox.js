import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import elementOptions from '../constants/elementOptions.json';

const CustomFormControl = withStyles(() => ({
  root: {
    width: '100%',
    '& .MuiInputBase-root': {
      borderRadius: '0',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#1b1515'
      }
    }
  },
}))(FormControl);

const CustomSelect = withStyles(() => ({
  root: {
    width: '210px',
    padding: '15.5px 14px'
  },
}))(Select);

class ElementSelectBox extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    const {
      id,
      label,
      activeElement,
      onChangeEvent,
      onBlueEvent,
      wrapMargin
    } = this.props
    return (
      <div style={{ margin: wrapMargin }}>
        <CustomFormControl
          variant="outlined"
          autoComplete="off"
          onBlur={() => onBlueEvent ? onBlueEvent(activeElement) : null}
          onSubmit={event => this.handleSubmit(event)}>
          <InputLabel
            htmlFor={id}
            color="secondary">
            {label || '属性'}
          </InputLabel>
          <CustomSelect
            native
            onChange={event => onChangeEvent(event, id)}
            label={label}
            color="secondary">
            {elementOptions.map(option => {
              return (
                <option
                  key={option.element}
                  value={option.element}>
                  {option.label}
                </option>);
            })}
          </CustomSelect>
        </CustomFormControl>
      </div>
    )
  }
}

export default ElementSelectBox;
