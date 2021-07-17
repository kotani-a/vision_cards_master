import React, { Component } from 'react';
import Card from './Card'
import RaritySelectBox from './RaritySelectBox'
import ElementSelectBox from './ElementSelectBox'
import SliderInput from './SliderInput'
import RangeSliderInput from './RangeSliderInput'
import AutocompleteWidthTree from './AutocompleteWidthTree';
import AbilitySelectDialog from './AbilitySelectDialog';
import ConfirmDialog from './ConfirmDialog';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import inputList from '../constants/inputList.json';
import css from '../css/AddCardDialog.module.css';

const CustomDialog = withStyles(() => ({
  root: {
    '& .MuiDialog-paper': {
      width: '100%',
      maxWidth: '900px',
      height: '100%',
      maxHeight: 'initial',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
      boxShadow: 'none',
      position: 'relative'
    }
  },
}))(Dialog);

const CustomButton = withStyles(() => ({
  root: {
    alignSelf: 'flex-end',
    margin: '8px',
    border: '1px solid #1b1515',
    borderRadius: '0'
  },
}))(Button);

const CustomFormControlLabel = withStyles(() => ({
  root: {
    minHeight: '48px',
    margin: '4px 0 0 0',
    border: '1px solid #1b1515'
  },
}))(FormControlLabel);

const CustomTextField = withStyles(() => ({
  root: {
    border: '1px solid #1b1515',
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomAccordionDetails = withStyles(() => ({
  root: {
    flexDirection: 'column'
  },
}))(AccordionDetails);

const CustomAccordion = withStyles(() => ({
  root: {
    margin: '4px 0',
    boxShadow: 'none',
    border: '1px solid #1b1515',
    '&.Mui-expanded': {
      margin: '4px 0'
    },
    '& .MuiAccordionSummary-root': {
      maxHeight: '48px',
      minHeight: '48px'
    }
  },
}))(Accordion);

class AddCardDialog extends Component {
  constructor (props) {
    super(props);
    this.state = {
      card: {
        ID: `C${this.props.cardsLength + 1}`,
        created: `${new Date().toISOString()}`,
        name: '',
        rarity: 5,
        cost: 0,
        partyAbility1: '',
        partyAbility1Type: '',
        partyAbility1TypeLabel: '',
        partyAbility1Conditions: '',
        partyAbility2: '',
        partyAbility2Type: '',
        partyAbility2TypeLabel: '',
        partyAbility2Conditions: '',
        ability1: '',
        ability1Type: '',
        ability1TypeLabel: '',
        ability1Conditions: '',
        ability2: '',
        ability2Type: '',
        ability2TypeLabel: '',
        ability2Conditions: '',
        ability3: '',
        ability3Type: '',
        ability3TypeLabel: '',
        ability3Conditions: '',
        ability4: '',
        ability4Type: '',
        ability4TypeLabel: '',
        ability4Conditions: '',
        bonusAbility: '',
        bonusAbilityType: '',
        bonusAbilityTypeLabel: '',
        bonusAbilityActiveElement: '',
        visionAbility: '',
        visionAbilityConditions: '',
        hp: 0,
        maxHp: 0,
        tp: 0,
        maxTp: 0,
        ap: 0,
        maxAp: 0,
        power: 0,
        maxPower: 0,
        magic: 0,
        maxMagic: 0,
        shield: 0,
        maxShield: 0,
        barrier: 0,
        maxBarrier: 0,
        dexterity: 0,
        maxDexterity: 0,
        speed: 0,
        maxSpeed: 0,
        luck: 0,
        maxLuck: 0,
        limited: false,
        comfirmText: ''
      },
      autoCompletes: {
        partyAbility1AutoComplete: null,
        partyAbility2AutoComplete: null,
        bonusAbilityAutoComplete: null,
        ability1AutoComplete: null,
        ability2AutoComplete: null,
        ability3AutoComplete: null,
        ability4AutoComplete: null
      },
      abilitySelectDialog: false,
      confirmDialog: false,
      openDialogType: '',
      abilitySelectDialogParentItemId: '',
      errorMesseage: '',
      inserting: false
    };
    this.changeInput = this.changeInput.bind(this);
    this.changeRaritySelect = this.changeRaritySelect.bind(this);
    this.changeElementSelect = this.changeElementSelect.bind(this);
    this.changeSlider = this.changeSlider.bind(this);
    this.changeRangeSlider = this.changeRangeSlider.bind(this);
    this.changeAutocomplete = this.changeAutocomplete.bind(this);
    this.abilityTreeDialogOpen = this.abilityTreeDialogOpen.bind(this);
    this.abilitySelectDialogClose = this.abilitySelectDialogClose.bind(this);
    this.conditionSet = this.conditionSet.bind(this);
    this.confirmDialogClose = this.confirmDialogClose.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  componentDidUpdate () {}

  resetCard () {
    this.setState({card: {
      ID: `C${this.props.cardsLength + 1}`,
      created: `${new Date().toISOString()}`,
      name: '',
      rarity: 5,
      cost: 0,
      partyAbility1: '',
      partyAbility1Type: '',
      partyAbility1TypeLabel: '',
      partyAbility1Conditions: '',
      partyAbility2: '',
      partyAbility2Type: '',
      partyAbility2TypeLabel: '',
      partyAbility2Conditions: '',
      ability1: '',
      ability1Type: '',
      ability1TypeLabel: '',
      ability1Conditions: '',
      ability2: '',
      ability2Type: '',
      ability2TypeLabel: '',
      ability2Conditions: '',
      ability3: '',
      ability3Type: '',
      ability3TypeLabel: '',
      ability3Conditions: '',
      ability4: '',
      ability4Type: '',
      ability4TypeLabel: '',
      ability4Conditions: '',
      bonusAbility: '',
      bonusAbilityType: '',
      bonusAbilityTypeLabel: '',
      bonusAbilityActiveElement: '',
      visionAbility: '',
      visionAbilityConditions: '',
      hp: 0,
      maxHp: 0,
      tp: 0,
      maxTp: 0,
      ap: 0,
      maxAp: 0,
      power: 0,
      maxPower: 0,
      magic: 0,
      maxMagic: 0,
      shield: 0,
      maxShield: 0,
      barrier: 0,
      maxBarrier: 0,
      dexterity: 0,
      maxDexterity: 0,
      speed: 0,
      maxSpeed: 0,
      luck: 0,
      maxLuck: 0,
      limited: false,
      comfirmText: ''
    }})
  }

  resetAutoCompletes () {
    this.setState({autoCompletes: {
      partyAbility1AutoComplete: null,
      partyAbility2AutoComplete: null,
      bonusAbilityAutoComplete: null,
      ability1AutoComplete: null,
      ability2AutoComplete: null,
      ability3AutoComplete: null,
      ability4AutoComplete: null
    }})
  }

  addCard () {
    const { card } = this.state
    this.setState({inserting: true})
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(card);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://e7hi87nfd6.execute-api.ap-northeast-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => {
      if (JSON.parse(result).statusCode === 200) {
        this.resetCard()
        this.resetAutoCompletes()
        this.confirmDialogClose()
        this.props.addCardDialogClose()
        this.props.getCards()
      } else {
        this.setState({ errorMesseage: JSON.parse(result).body })
      }
    })
    .catch(error => {
      console.log('error', error)
    })
    this.setState({inserting: false})
  }

  setCardValue (value, id) {
    const { card } = this.state
    card[id] = value
    this.setState({
      card: card
    });
  }

  changeInput (event, inputListId) {
    const { card } = this.state
    card[inputListId] = event.target.value
    this.setState({
      card: card
    });
  }

  changeCheck (event, inputListId) {
    const { card } = this.state
    card[inputListId] = event.target.checked
    this.setState({
      card: card
    });
  }

  changeRaritySelect (event, inputListId) {
    const { card } = this.state
    card[inputListId] = Number(event.target.value)
    this.setState({
      card: card
    });
  }
  
  changeElementSelect (event, inputListId) {
    const { card } = this.state
    card[inputListId] = Number(event.target.value)
    this.setState({
      card: card
    });
  }

  changeSlider (newValue, inputListId) {
    const { card } = this.state
    card[inputListId] = newValue
    this.setState({
      card: card
    });
  }

  changeRangeSlider (newValue, inputListId) {
    const { card } = this.state
    card[inputListId] = newValue[0]
    card[this.capitalizeStringAndAddText(inputListId, 'max')] = newValue[1]
    this.setState({
      card: card
    });
  }

  changeAutocomplete (value, id, linkItem) {
    const { autoCompletes } = this.state
    autoCompletes[id] = value
    this.setState({
      autoCompletes: autoCompletes
    });
    linkItem.forEach(item => {
      switch (item.set) {
        case 'label':
        this.setCardValue(value ? value.label : '', item.id)
        break
        case 'type':
        this.setCardValue(value ? value.type : '', item.id)
        break
        default:
        break
      }
    });
  }
  
  abilityTreeDialogOpen (openDialogType, parent) {
    this.setState({
      openDialogType,
      abilitySelectDialog: true,
      abilitySelectDialogParentItemId: parent
    });
  }

  abilitySelectDialogClose () {
    this.setState({ abilitySelectDialog: false });
  }

  conditionSet (selectVal) {
    const { autoCompletes, openDialogType, abilitySelectDialogParentItemId } = this.state
    const linkItemJudgeArray = inputList.find(item => item.id === openDialogType)
    let linkItem = []
    if (!linkItemJudgeArray) {
      linkItem = inputList.find(item => item.id === abilitySelectDialogParentItemId).accordionDetails.find(accordionItem => accordionItem.id === openDialogType).linkItem
    } else {
      linkItem = linkItemJudgeArray.linkItem
    }
    this.changeAutocomplete(selectVal, openDialogType, linkItem)
    autoCompletes[openDialogType] = selectVal
    this.setState({
      autoCompletes: autoCompletes
    });
  }

  capitalizeStringAndAddText (text, addText) {
    return `${addText}${text.charAt(0).toUpperCase() + text.slice(1)}`
  }

  confirmDialogClose () {
    this.setState({confirmDialog: false})
  }

  renderInput (item, index, parent) {
    const {
      card,
      autoCompletes
    } = this.state
    const {
      abilityTypeOptoins
    } = this.props

    switch (item.inputType) {
      case 'text':
        return (
          <CustomTextField
            id={item.id}
            key={`${item.id}-${index}`}
            parent={parent || ''}
            value={card[item.id]}
            label={item.label}
            type={item.inputType}
            style={{ margin: index === 0 ? '0 0 8px 0' : '4px 0' }}
            color="secondary"
            variant="filled"
            size="small"
            autoComplete="off"
            onChange={event => this.changeInput(event, item.id)}
          />
        )
      case 'raritySelect':
        return (
          <RaritySelectBox
            id={item.id}
            key={`${item.id}-${index}`}
            label={item.label}
            parent={parent || ''}
            value={card[item.id]}
            wrapMargin="0"
            onChangeEvent={this.changeRaritySelect}
          />
        )
      case 'elementSelect':
        return (
          <ElementSelectBox
            id={item.id}
            key={`${item.id}-${index}`}
            label={item.label}
            parent={parent || ''}
            value={card[item.id]}
            wrapMargin="4px 0 0 0"
            onChangeEvent={this.changeInput}
          />
        )
      case 'check':
        return (
          <CustomFormControlLabel
            key={`${item.id}-${index}`}
            control={
              <Checkbox
                checked={item.limited}
                onChange={event => this.changeCheck(event, item.id)} />
              }
            label={item.label}
          />
        )
      case 'number':
        return (
          <SliderInput
            id={item.id}
            key={`${item.id}-${index}`}
            parent={parent || ''}
            value={card[item.id]}
            label={item.label}
            step={10}
            onChangeEvent={this.changeSlider}
          />
        )
      case 'rangeNumber':
        return (
          <RangeSliderInput
            id={item.id}
            key={`${item.id}-${index}`}
            parent={parent || ''}
            value={[card[item.id], card[this.capitalizeStringAndAddText(item.id, 'max')]]}
            label={item.label}
            step={item.step}
            max={item.max}
            changeInput
            onChangeInputEvent={this.changeInput}
            onChangeEvent={this.changeRangeSlider}
          />
        )
      case 'autocompleteWidthTree':
        return (
          <AutocompleteWidthTree
            id={item.id}
            key={`${item.id}-${index}`}
            parent={parent || ''}
            label={item.label}
            linkItem={item.linkItem}
            value={autoCompletes[item.id]}
            openDialogType={item.id}
            options={abilityTypeOptoins}
            wrapMargin='0 0 4px 0'
            onChangeEvent={this.changeAutocomplete}
            onTreeButtonClickEvent={this.abilityTreeDialogOpen}
          />
        )
      case 'accordion':
        return (
          <CustomAccordion key={`${item.id}-${index}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={item.id}
            >
              {item.label}
            </AccordionSummary>
            <CustomAccordionDetails>
              {item.accordionDetails.map(accordionItem => this.renderInput(accordionItem, index, item.id))}
            </CustomAccordionDetails>
          </CustomAccordion>
        )
      default:
        return (<div>default</div>)
    }
  }

  render () {
    const {
      card,
      abilitySelectDialog,
      confirmDialog,
      openDialogType,
      errorMesseage,
      inserting
    } = this.state
    const {
      addCardDialog,
      addCardDialogClose
    } = this.props
    return (
      <CustomDialog
        open={addCardDialog}
        TransitionComponent={Transition}
        onClose={() => addCardDialogClose()}>
        <h2 className={css.headerText}>カード作成</h2>
        <div className={css.cardMakingArea}>
          <Card card={card}/>
          <div className={css.textFieldWrap}>
            {inputList.map((item, index) => this.renderInput(item, index))}
          </div>
        </div>
        <CustomButton
          variant="outlined"
          size="small"
          onClick={() => this.setState({confirmDialog: true})}>
          作成
        </CustomButton>
        <AbilitySelectDialog
          abilitySelectDialog={abilitySelectDialog}
          abilitySelectDialogClose={this.abilitySelectDialogClose}
          conditionSet={this.conditionSet}
          openDialogType={openDialogType}
        />
        <ConfirmDialog
          open={confirmDialog}
          errorMesseage={errorMesseage}
          inserting={inserting}
          onChangeEvent={this.changeInput}
          onCloseEvent={() => this.confirmDialogClose()}
          onComfirmButtonEvent={this.addCard}
        />
      </CustomDialog>
    );
  }
}

export default AddCardDialog;
