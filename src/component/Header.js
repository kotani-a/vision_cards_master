import React, { Component } from 'react';
import css from '../css/Header.module.css';
import vcmImage from "../images/vcm5.png" 

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={css.clearfix}>
        <h1 className={css.header}>
          <img
            src={vcmImage}
            alt="visition cards master"
            className={css.headerImage}
          ></img>
        </h1>
      </div>
    )
  }
}

export default Header
