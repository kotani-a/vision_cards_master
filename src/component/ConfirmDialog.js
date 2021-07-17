import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import css from '../css/ConfirmDialog.module.css';

const CustomDialog = withStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      borderRadius: 0,
      boxShadow: 'none',
      minWidth: '300px',
      minHeight: '150px'
    }
  },
}))(Dialog);

const CustomButton = withStyles(() => ({
  root: {
    alignSelf: 'flex-end',
    margin: 'auto 12px 12px 0',
    border: '1px solid #1b1515',
    borderRadius: '0'
  },
}))(Button);

const CustomTextField = withStyles(() => ({
  root: {
    border: '1px solid #1b1515',
    margin: '12px',
    '&::befor': {
      display: 'none'
    },
    '& .MuiInputBase-root': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '&::before': {
        borderBottom: 'none'
      }
    },
    '& .MuiInputBase-root.Mui-focused': {
      backgroundColor: 'transparent',
    }
  },
}))(TextField);

class ConfirmDialog extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate () {}

  render () {
    const {
      comfirmText,
      open,
      errorMesseage,
      inserting,
      onChangeEvent,
      onCloseEvent,
      onComfirmButtonEvent
    } = this.props
    return (
      <CustomDialog
        open={open}
        onClose={() => onCloseEvent()}>
        <h2 className={css.headerText}>合言葉入力</h2>
        <CustomTextField
          id="confirm"
          value={comfirmText}
          label="合言葉は?"
          color="secondary"
          variant="filled"
          size="small"
          autoComplete="off"
          autoFocus
          onChange={event => onChangeEvent(event, 'comfirmText')}
        />
        <span className={css.errorMesseage}>{errorMesseage}</span>
        <CustomButton
          variant="outlined"
          size="small"
          disabled={inserting}
          onClick={() => onComfirmButtonEvent()}>
          確定
        </CustomButton>
      </CustomDialog>
    );
  }
}

export default ConfirmDialog;
