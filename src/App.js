import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import CardsTable from './component/CardsTable.js'
import HeaderButtons from './component/HeaderButtons.js'
import Header from './component/Header.js'
import Progress from './component/Progress.js'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: [],
      abilityTypeOptoins: [],
      eitherCondition: '',
      partyAbilityCondition: '',
      abilityCondition: '',
      bonusAbilityCondition: '',
      bonusAbilityActiveElementCondition: '',
      loading: true,
      drawerOpen: false,
      headers: [
        { id: 'rarity', label: 'レアリティ', display: true },
        { id: 'cost', label: 'コスト', display: true },
        { id: 'name', label: '名前', display: true },
        { id: 'partyAbility1', label: 'パーティーアビリティ1', display: true },
        { id: 'partyAbility2', label: 'パーティーアビリティ2', display: false },
        { id: 'ability1', label: '付加効果1', display: true },
        { id: 'ability2', label: '付加効果2', display: false },
        { id: 'ability3', label: '付加効果3', display: false },
        { id: 'ability4', label: '付加効果4', display: false },
        { id: 'bonusAbility', label: 'ボーナスアビリティ', display: true },
        { id: 'bonusAbilityActiveElement', label: 'ボーナスアビリティ発動属性', display: true },
        { id: 'visionAbility', label: 'ビジョンアビリティ', display: false },
        { id: 'hp', label: 'HP', display: true },
        { id: 'maxHp', label: 'maxHP', display: false },
        { id: 'tp', label: 'TP', display: false },
        { id: 'maxTp', label: 'maxTP', display: false },
        { id: 'ap', label: 'AP', display: false },
        { id: 'maxAp', label: 'maxAP', display: false },
        { id: 'power', label: '攻撃', display: true },
        { id: 'maxPower', label: '最大攻撃', display: false },
        { id: 'magic', label: '魔力', display: true },
        { id: 'maxMagic', label: '最大魔力', display: false },
        { id: 'shield', label: '防御', display: false },
        { id: 'maxShield', label: '最大防御', display: false },
        { id: 'barrier', label: '精神', display: false },
        { id: 'maxBarrier', label: '最大精神', display: false },
        { id: 'dexterity', label: '器用さ', display: false },
        { id: 'maxDexterity', label: '最大器用さ', display: false },
        { id: 'speed', label: '素早さ', display: false },
        { id: 'maxSpeed', label: '最大素早さ', display: false },
        { id: 'luck', label: '運', display: false },
        { id: 'maxLuck', label: '最大運', display: false },
        { id: 'limited', label: '限定', display: false }
      ]
    };
    this.setEitherCondision = this.setEitherCondision.bind(this);
    this.setCondisionPartyAbility = this.setCondisionPartyAbility.bind(this);
    this.setCondisionAbility = this.setCondisionAbility.bind(this);
    this.setCondisionBonusAbility = this.setCondisionBonusAbility.bind(this);
    this.setCondisionBonusAbilityActiveElement = this.setCondisionBonusAbilityActiveElement.bind(this);
    this.headerSet = this.headerSet.bind(this);
    this.loadingStart = this.loadingStart.bind(this);
    this.loadingEnd = this.loadingEnd.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  craeteAbilityTypeOptoins (cards) {
    const result = [];
    cards.forEach(card=> {
      // パーティーアビリティ1
      if (!result.some(option => option.type === card.partyAbility1Type)) {
        result.push({
          type: card.partyAbility1Type,
          label: card.partyAbility1TypeLabel
        });
      }
      // パーティーアビリティ2
      if (card.partyAbility2Type && !result.some(option => option.type === card.partyAbility2Type)) {
        result.push({
          type: card.partyAbility2Type,
          label: card.partyAbility2TypeLabel
        });
      }
      // 付加効果1
      if (!result.some(option => option.type === card.ability1Type)) {
        result.push({
          type: card.ability1Type,
          label: card.ability1TypeLabel
        });
      }
      // 付加効果2
      if (card.ability2Type && !result.some(option => option.type === card.ability2Type)) {
        result.push({
          type: card.ability2Type,
          label: card.ability2TypeLabel
        });
      }
      // 付加効果3
      if (card.ability3Type && !result.some(option => option.type === card.ability3Type)) {
        result.push({
          type: card.ability3Type,
          label: card.ability3TypeLabel
        });
      }// 付加効果4
      if (card.ability4Type && !result.some(option => option.type === card.ability4Type)) {
        result.push({
          type: card.ability4Type,
          label: card.ability4TypeLabel
        });
      }
      // ボーナスアビリティ
      if (card.bonusAbilityType && !result.some(option => option.type === card.bonusAbilityType)) {
        result.push({
          type: card.bonusAbilityType,
          label: card.bonusAbilityTypeLabel
        });
      }
    });
    result.sort((a,b) => {
      if(a.label < b.label) return -1;
      if(a.label > b.label) return 1;
      return 0;
  });
    this.setState({ abilityTypeOptoins: result });
  }

  getCards = async () => {
    this.setState({ loading: true });
    try {
      const result = await axios.get("https://ie5xbafoi6.execute-api.ap-northeast-1.amazonaws.com/dev");
      this.setState({
        cards: result.data,
        loading: false
      });
      this.craeteAbilityTypeOptoins(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  setEitherCondision (val) {
    this.setState({ eitherCondition: val ? val.type : '' });
  }

  setCondisionPartyAbility (val) {
    this.setState({ partyAbilityCondition: val ? val.type : '' });
  }

  setCondisionAbility (val) {
    this.setState({ abilityCondition: val ? val.type : '' });
  }

  setCondisionBonusAbility (val) {
    this.setState({ bonusAbilityCondition: val ? val.type : '' });
  }

  setCondisionBonusAbilityActiveElement (id) {
    this.setState({ bonusAbilityActiveElementCondition: id || '' });
  }

  headerSet (headers) {
    this.setState({ headers: headers });
  }

  loadingStart () {
    this.setState({ loading: true });
  }

  loadingEnd () {
    this.setState({ loading: false });
  }

  openDrawer () {
    this.setState({ drawerOpen: true });
  }

  closeDrawer () {
    this.setState({ drawerOpen: false });
  }

  componentDidMount () {
    this.getCards();
  }

  render () {
    const {
      abilityTypeOptoins,
      cards,
      eitherCondition,
      partyAbilityCondition,
      abilityCondition,
      bonusAbilityCondition,
      bonusAbilityActiveElementCondition,
      headers,
      loading,
      drawerOpen
    } = this.state
    return (
      <div
        style={{
          width: drawerOpen ? 'calc(100% - 280px)' : '100%',
          minWidth: '300px'
        }}
        className="mainWrap">
        <Header/>
        <HeaderButtons
          abilityTypeOptoins={abilityTypeOptoins}
          setEitherCondision={this.setEitherCondision}
          setCondisionPartyAbility={this.setCondisionPartyAbility}
          setCondisionAbility={this.setCondisionAbility}
          setCondisionBonusAbility={this.setCondisionBonusAbility}
          setCondisionBonusAbilityActiveElement={this.setCondisionBonusAbilityActiveElement}
          headers={headers}
          headerSet={this.headerSet}
          loadingStart={this.loadingStart}
          loadingEnd={this.loadingEnd}
          drawerOpen={drawerOpen}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
          cardsLength={cards.length}
          getCards={this.getCards}
        />
        <CardsTable
          cards={cards}
          eitherCondition={eitherCondition}
          partyAbilityCondition={partyAbilityCondition}
          abilityCondition={abilityCondition}
          bonusAbilityCondition={bonusAbilityCondition}
          bonusAbilityActiveElementCondition={bonusAbilityActiveElementCondition}
          headers={headers}
          drawerOpen={drawerOpen}
        />
        <Progress
          loading={loading} />
      </div>
    );
  }
}

export default App;
