import React, { Component } from 'react';
import Card from './Card.js'
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import css from '../css/CardDialog.module.css';

const CustomDialog = withStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      margin: '0',
      maxWidth: 'initial',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      width: '400px',
      height: '566px',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
}))(Dialog);

const CustomBeforeIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: 'calc(50% - 48px)',
    left: 'calc(50% - 200px - 48px - 12px)',
    zIndex: '9999',
    backgroundColor: '#fcfcfc',
    '&:hover': {
      backgroundColor: '#dcdcdc'
    }
  },
}))(IconButton);

const CustomNextIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: 'calc(50% - 48px)',
    right: 'calc(50% - 200px - 48px - 12px)',
    zIndex: '9999',
    backgroundColor: '#fcfcfc',
    '&:hover': {
      backgroundColor: '#dcdcdc'
    }
  },
}))(IconButton);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

class CardDialog extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  isDisabledBeforeCard () {
    const {
      card,
      filterSortList
    } = this.props
    const cardIndex = filterSortList.findIndex(filteredCard => filteredCard.ID === card.ID)
    const beforeCard = filterSortList[cardIndex - 1]
    return !beforeCard
  }

  isDisabledNextCard () {
    const {
      card,
      filterSortList
    } = this.props
    const cardIndex = filterSortList.findIndex(filteredCard => filteredCard.ID === card.ID)
    const nextCard = filterSortList[cardIndex + 1]
    return !nextCard
  }

  render () {
    const {
      cardDialog,
      card,
      filterSortList,
      moveBeforeCard,
      moveNextCard,
      cardDialogClose
    } = this.props
    return (
      <div>
        <div className={cardDialog ? css.buttons : css.noDisplayButtons }>
          {this.isDisabledBeforeCard() ?
            null:
            <CustomBeforeIconButton
              onClick={() => moveBeforeCard(filterSortList)}>
              <NavigateBeforeIcon style={{ color: '#1b1515' }}/>
            </CustomBeforeIconButton>
          }
          {
            this.isDisabledNextCard() ?
            null:
            <CustomNextIconButton
              onClick={() => moveNextCard(filterSortList)}>
              <NavigateNextIcon style={{ color: '#1b1515' }}/>
            </CustomNextIconButton>
          }
        </div>
        <CustomDialog
          open={cardDialog}
          TransitionComponent={Transition}
          onClose={() => cardDialogClose()}>
          <Card card={card}/>
        </CustomDialog>
      </div>
    );
  }
}

export default CardDialog;
