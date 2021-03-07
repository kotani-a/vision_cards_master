import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';

class TableTooltipCell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  tooltipOpen () {
    this.setState({
      open: true
    });
  }

  tooltipClose = () => {
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
      <Tooltip
        key={id}
        title={title}
        placement="right"
        open={open}
        arrow
        disableFocusListener>
        <TableCell
          onMouseEnter={() => this.tooltipOpen()}
          onMouseLeave={() => this.tooltipClose()}
          onTouchStart={() => this.tooltipOpen()}
          onTouchEnd={() => this.tooltipClose()}
        >
          {cell}
        </TableCell>
      </Tooltip>
    )
  }
}

export default TableTooltipCell
