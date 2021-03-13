import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(() => ({
  root: {
    userSelect: 'none'
  },
}))(TableCell);

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#1b1515',
    color: '#fcfcfc',
  },
  arrow: {
    color: '#1b1515'
  }
}))(Tooltip);

class TableTooltipCell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    window.addEventListener('touchstart', e => {
      this.tooltipDisplayJudge(e)
    });
  }

  tooltipDisplayJudge (e) {
    const { id } = this.props
    const { open } = this.state
    if (e.target.id === id) {
      this.setState({
        open: !open
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  tooltipOpen () {
    this.setState({
      open: true
    });
  }

  tooltipClose () {
    this.setState({
      open: false
    });
  }

  render () {
    const {
      id,
      title,
      cell
    } = this.props
    const { open } = this.state
    return (
      <CustomTooltip
        key={id}
        title={title}
        placement="right"
        open={open}
        arrow
        disableFocusListener>
        <CustomTableCell
          id={id}
          onMouseEnter={() => this.tooltipOpen()}
          onMouseLeave={() => this.tooltipClose()}>
          {cell}
        </CustomTableCell>
      </CustomTooltip>
    )
  }
}

export default TableTooltipCell
