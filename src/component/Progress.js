import React, { Component } from 'react';
import cardGradationAnimation from "../images/card-gradation-animation.gif";
import css from '../css/Progress.module.css'

class Progress extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { loading } = this.props
    return (
      <div className={loading ? `${css.loadingWrap}` : ` ${css.noDisplay}`}>     
        <h2 className={css.headerText}>Now Loading ...</h2>
        <img
          src={cardGradationAnimation}
          className={css.cardImage}
          alt="card gradation animation"/>
      </div>
    )
  }
}

export default Progress;
