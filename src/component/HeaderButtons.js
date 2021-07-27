import React, { Component } from 'react';
import TableHeaderSettingDialog from './TableHeaderSettingDialog';
import AbilitySelectDialog from './AbilitySelectDialog';
import AddCardDialog from './AddCardDialog';
import AutocompleteWidthTree from './AutocompleteWidthTree';
import ElementSelectBox from './ElementSelectBox';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import css from '../css/HeaderButtons.module.css';

const CustomAddBoxIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: '5px',
    right: '72px',
    padding: '3px'
  },
}))(IconButton);

const CustomSearchIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: '5px',
    right: '40px',
    padding: '3px'
  },
}))(IconButton);

const CustomSettingsIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: '5px',
    right: '8px',
    padding: '3px'
  },
}))(IconButton);

const CustomCloseIconButton = withStyles(() => ({
  root: {
    position: 'fixed',
    top: '5px',
    right: '8px',
    padding: '3px'
  },
}))(IconButton);

const CustomDrawer = withStyles(() => ({
  root: {
    width: '280px',
    '& .MuiDrawer-paper': {
      padding: '40px 8px 8px 8px',
      boxSizing: 'border-box',
      borderLeft: '1px solid #1b1515'
    }
  },
}))(Drawer);

class HeaderButtons extends Component {
  constructor (props) {
    super(props);
    this.state = {
      eitherCondition: null,
      partyAbilityCondition: null,
      abilityCondition: null,
      bonusAbilityCondition: null,
      bonusAbilityActiveElement: '',
      openDialogType: '',
      headerSettingDialog: false,
      abilitySelectDialog: false,
      addCardDialog: false
    };
    this.changeEitherCondition = this.changeEitherCondition.bind(this);
    this.changePartyAbilityCondition = this.changePartyAbilityCondition.bind(this);
    this.changeAbilityCondition = this.changeAbilityCondition.bind(this);
    this.changeBonusAbilityCondition = this.changeBonusAbilityCondition.bind(this);
    this.changebonusAbilityActiveElementCondition = this.changebonusAbilityActiveElementCondition.bind(this);
    this.headerSettingDialogClose = this.headerSettingDialogClose.bind(this);
    this.abilitySelectDialogClose = this.abilitySelectDialogClose.bind(this);
    this.addCardDialogClose = this.addCardDialogClose.bind(this);
    this.headerSet = this.headerSet.bind(this);
    this.conditionSet = this.conditionSet.bind(this);
    this.abilitySelectDialogOpen = this.abilitySelectDialogOpen.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  changeEitherCondition (newValue) {
    this.setState({ eitherCondition: newValue })
  }

  changePartyAbilityCondition (newValue) {
    this.setState({ partyAbilityCondition: newValue })
  }

  changeAbilityCondition (newValue) {
    this.setState({ abilityCondition: newValue })
  }

  changeBonusAbilityCondition (newValue) {
    this.setState({ bonusAbilityCondition: newValue })
  }

  changebonusAbilityActiveElementCondition (event) {
    this.setState({ bonusAbilityActiveElement: event.target.value !== 'none' ? event.target.value : ''})
  }

  conditionSet (selectVal) {
    const { openDialogType } = this.state
    const {
      setEitherCondision,
      setCondisionPartyAbility,
      setCondisionAbility,
      setCondisionBonusAbility
    } = this.props
    if (!selectVal) return
    switch (openDialogType) {
      case 'either':
        this.changeEitherCondition(selectVal)
        setEitherCondision(selectVal)
        break
      case 'partyAbility':
        this.changePartyAbilityCondition(selectVal)
        setCondisionPartyAbility(selectVal)
        break
      case 'ability':
        this.changeAbilityCondition(selectVal)
        setCondisionAbility(selectVal)
        break
      case 'bonusAbility':
        this.changeBonusAbilityCondition(selectVal)
        setCondisionBonusAbility(selectVal)
        break
      default: return
    }
  }

  headerSettingDialogOpen () {
    this.setState({ headerSettingDialog: true });
  }

  headerSettingDialogClose () {
    this.setState({ headerSettingDialog: false });
  }

  addCardDialogOpen () {
    this.setState({ addCardDialog: true });
  }

  addCardDialogClose () {
    this.setState({ addCardDialog: false });
  }

  abilitySelectDialogOpen (openDialogType) {
    this.setState({
      openDialogType,
      abilitySelectDialog: true
    });
  }

  abilitySelectDialogClose () {
    this.setState({ abilitySelectDialog: false });
  }

  headerSet (headers) {
    this.props.headerSet(headers);
  }

  render () {
    const {
      setEitherCondision,
      setCondisionPartyAbility,
      setCondisionAbility,
      setCondisionBonusAbility,
      setCondisionBonusAbilityActiveElement,
      abilityTypeOptoins,
      headers,
      drawerOpen,
      openDrawer,
      closeDrawer,
      cardsLength,
      getCards
    } = this.props
    const {
      eitherCondition,
      partyAbilityCondition,
      abilityCondition,
      bonusAbilityCondition,
      bonusAbilityActiveElement,
      headerSettingDialog,
      abilitySelectDialog,
      openDialogType,
      addCardDialog
    } = this.state
    return (
      <div className={css.conditionsWrap}>
        <div className={css.addButton}>
          <CustomAddBoxIconButton
            onClick={() => this.addCardDialogOpen()}>
            <AddBoxIcon style={{ color: '#1b1515' }}/>
          </CustomAddBoxIconButton>
        </div>
        <CustomSearchIconButton
          onClick={() => openDrawer()}>
          <SearchIcon style={{ color: '#1b1515' }}/>
        </CustomSearchIconButton>
        <CustomSettingsIconButton
          onClick={() => this.headerSettingDialogOpen()}>
          <SettingsIcon style={{ color: '#1b1515' }}/>
        </CustomSettingsIconButton>
        <CustomDrawer
          variant="persistent"
          anchor="right"
          open={drawerOpen}
          >
          <CustomCloseIconButton
            onClick={closeDrawer}>
            <CloseIcon style={{ color: '#1b1515' }}/>
          </CustomCloseIconButton>
          <h2 className={css.conditionHeader}>条件</h2>
          <AutocompleteWidthTree
            id="combo-box-either-condition"
            key="combo-box-either-condition"
            label="いずれかに含む"
            openDialogType="either"
            value={eitherCondition}
            options={abilityTypeOptoins}
            onChangeEvent={this.changeEitherCondition}
            onBlueEvent={setEitherCondision}
            onTreeButtonClickEvent={this.abilitySelectDialogOpen}
            wrapMargin="16px 0 8px 0"
          />
          <AutocompleteWidthTree
            id="combo-box-partyAbility"
            key="combo-box-partyAbility"
            label="パーティーアビリティ"
            openDialogType="partyAbility"
            value={partyAbilityCondition}
            options={abilityTypeOptoins}
            onChangeEvent={this.changePartyAbilityCondition}
            onBlueEvent={setCondisionPartyAbility}
            onTreeButtonClickEvent={this.abilitySelectDialogOpen}
            wrapMargin="8px 0 8px 0"
          />
          <AutocompleteWidthTree
            id="combo-box-ability"
            key="combo-box-ability"
            label="付加効果"
            openDialogType="ability"
            value={abilityCondition}
            options={abilityTypeOptoins}
            onChangeEvent={this.changeAbilityCondition}
            onBlueEvent={setCondisionAbility}
            onTreeButtonClickEvent={this.abilitySelectDialogOpen}
            wrapMargin="8px 0 8px 0"
          />
          <AutocompleteWidthTree
            id="combo-box-bonus-ability"
            key="combo-box-bonus-ability"
            label="ボーナスアビリティ"
            openDialogType="bonusAbility"
            value={bonusAbilityCondition}
            options={abilityTypeOptoins}
            onChangeEvent={this.changeBonusAbilityCondition}
            onBlueEvent={setCondisionBonusAbility}
            onTreeButtonClickEvent={this.abilitySelectDialogOpen}
            wrapMargin="8px 0 8px 0"
          />
          <ElementSelectBox
            id="elementOption-select"
            key="elementOption-select"
            label="ボーナスアビリティ発動属性"
            activeElement={bonusAbilityActiveElement}
            onChangeEvent={this.changebonusAbilityActiveElementCondition}
            onBlueEvent={setCondisionBonusAbilityActiveElement}
            wrapMargin="10px 0 0 0"
          />
        </CustomDrawer>
        <TableHeaderSettingDialog
          headerSettingDialog={headerSettingDialog}
          headerSettingDialogClose={this.headerSettingDialogClose}
          headerSet={this.headerSet}
          headers={headers}>
        </TableHeaderSettingDialog>
        <AddCardDialog
          addCardDialog={addCardDialog}
          addCardDialogClose={this.addCardDialogClose}
          abilityTypeOptoins={abilityTypeOptoins}
          cardsLength={cardsLength}
          getCards={getCards}>
        </AddCardDialog>
        <AbilitySelectDialog
          abilitySelectDialog={abilitySelectDialog}
          abilitySelectDialogClose={this.abilitySelectDialogClose}
          conditionSet={this.conditionSet}
          openDialogType={openDialogType}>
        </AbilitySelectDialog>
      </div>
    );
  }
}

export default HeaderButtons;
