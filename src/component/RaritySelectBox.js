import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import rarityOptions from '../constants/rarityOptions.json';

const CustomFormControl = withStyles(() => ({
  root: {
    width: '100%',
    '& .MuiFormLabel-root': {
      backgroundColor: '#fff'
    },
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
      value,
      onChangeEvent,
      wrapMargin,
      label
    } = this.props
    return (
      <div style={{ margin: wrapMargin }}>
        <CustomFormControl
          variant="outlined"
          autoComplete="off"
          onSubmit={event => this.handleSubmit(event)}>
          <InputLabel
            htmlFor={id}
            color="secondary">
            {label || 'レアリティ'}
          </InputLabel>
          <CustomSelect
            value={value}
            native
            onChange={event => onChangeEvent(event, id)}
            color="secondary">
            {rarityOptions.map(option => {
              return (
                <option
                  key={option.id}
                  value={option.id}>
                  {option.rarity}
                </option>);
            })}
          </CustomSelect>
        </CustomFormControl>
      </div>
    )
  }
}

export default ElementSelectBox;
