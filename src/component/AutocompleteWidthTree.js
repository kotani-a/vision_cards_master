import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { withStyles } from '@material-ui/core/styles';
import css from '../css/AutocompleteWidthTree.module.css'

const CustomAccountTreeButton = withStyles(() => ({
  root: {
    minWidth: '48px'
  },
}))(Button);

const CustomTextField = withStyles(() => ({
  root: {
    '& > .MuiFilledInput-root': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:before': {
        border: 'none',
      }
    }
  },
}))(TextField);

class AutocompleteWidthTree extends Component {
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
      parent,
      label,
      value,
      openDialogType,
      options,
      onChangeEvent,
      onBlueEvent,
      onTreeButtonClickEvent,
      onInputChangeEvent,
      wrapMargin,
      linkItem
    } = this.props
    return (
      <div
        style={{ margin: `${wrapMargin}`}}
        className={css.conditionBoxWrap}>
        <form
          noValidate
          autoComplete="off"
          onBlur={() => onBlueEvent ? onBlueEvent(value) : null}
          onSubmit={event => this.handleSubmit(event)}
          className={css.formBox}>
          <Autocomplete
            id={`${id}-${parent || ''}`}
            value={value}
            options={options}
            getOptionLabel={option => option.label}
            onInputChange={(event, value) => onInputChangeEvent ? onInputChangeEvent(value, id) : null}
            onChange={(event, newValue) => onChangeEvent(newValue, id, linkItem)}
            renderInput={params =>
              <CustomTextField
                {...params}
                label={label}
                variant="filled"
                size="small"
                color="secondary"
              />}
          />
        </form>
        <hr className={css.divider}/>
        <CustomAccountTreeButton
          size="small"
          onClick={() => onTreeButtonClickEvent(openDialogType, parent)}
          startIcon={<AccountTreeIcon />}
          />
      </div>
    )
  }
}

export default AutocompleteWidthTree;
