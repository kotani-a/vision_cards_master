import React, { Component } from 'react';
import elementOptions from '../constants/elementOptions.json';
import css from '../css/Card.module.css'

class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate () {}

  getElementColor (type) {
    if (type) {
      return elementOptions.find(option => option.element === type).color
    } else {
      return '#aaaaaa'
    }
  }

  getElementBackgroundColor (type) {
    if (type) {
      return elementOptions.find(option => option.element === type).backgroundColor
    } else {
      return '#adadad'
    }
  }

  makeRarityLabel (rarity) {
    switch (rarity) {
      case 5: return 'UR'
      case 4: return 'SSR'
      case 3: return 'SR'
      case 2: return 'R'
      case 1: return 'N'
      default: return 'N'
    } 
  }

  makeElementLabel (type) {
    if (type) {
      return elementOptions.find(option => option.element === type).label
    } else {
      return ''
    }
  }

  render () {
    const { card } = this.props
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(315deg, ${this.getElementColor(card.bonusAbilityActiveElement)} 70%, rgba(255, 255, 255, 0.2) 100%)`,
          backgroundColor: `${this.getElementBackgroundColor(card.bonusAbilityActiveElement)}`
        }}
        className={css.gradationBord}>
        <div
          style={{ borderColor: `transparent ${this.getElementColor(card.bonusAbilityActiveElement)} transparent transparent`}}
          className={css.triangleTopRight}/>
        <div
          style={{ borderColor: `transparent transparent transparent ${this.getElementColor(card.bonusAbilityActiveElement)}`}}
          className={css.triangleBottomLeft}/>
        <div className={css.cardDialogWrap}>
          <div className={css.circleFrame}/>
          <div className={css.cost}><span>cost: </span><span className={css.costValue}>{card.cost}</span></div>
          <div className={css.headerDecoration1}/>
          <h2 className={css.headerText}>{card.name}</h2>
          <div className={css.headerDecoration2}/>
          <span className={css.rarity}>{this.makeRarityLabel(card.rarity)}</span>
          <div className={css.abilityWrap}>
          <div className={css.paragraph}>
              <span className={css.keyText}>パーティーアビリティ1: </span>
              <br/>
              <span>{card.partyAbility1}{card.partyAbility1Conditions ? <span>({card.partyAbility1Conditions})</span> : null}</span>
            </div>
            {card.partyAbility2 ?
              <div className={css.paragraph}>
                <span className={css.keyText}>パーティーアビリティ2: </span>
                <br/>
                <span>{card.partyAbility2}{card.partyAbility2Conditions ? <span>({card.partyAbility2Conditions})</span> : null}</span>
              </div>
            : null}
            <div className={css.paragraph}>
              <span className={css.keyText}>アビリティ1: </span>
              <br/>
              <span>{card.ability1}{card.ability1Conditions ? <span>({card.ability1Conditions})</span> : null}</span>
            </div>
            {card.ability2 ?
              <div className={css.paragraph}>
                <span className={css.keyText}>アビリティ2: </span>
                <br/>
                <span>{card.ability2}{card.ability2Conditions ? <span>({card.ability2Conditions})</span> : null}</span>
              </div>
              : null}
            {card.ability3 ?
              <div className={css.paragraph}>
                <span className={css.keyText}>アビリティ3: </span>
                <br/>
                <span>{card.ability3}{card.ability3Conditions ? <span>({card.ability3Conditions})</span> : null}</span>
              </div>
            : null}
            {card.ability4 ?
              <div className={css.paragraph}>
                <span className={css.keyText}>アビリティ4: </span>
                <br/>
                <span>{card.ability4}{card.ability4Conditions ? <span>({card.ability4Conditions})</span> : null}</span>
              </div>
            : null}
            {card.bonusAbility ?
              <div className={css.paragraph}>
                <span className={css.keyText}>ボーナスアビリティ: </span>
                <br/>
                <span>{card.bonusAbility}({this.makeElementLabel(card.bonusAbilityActiveElement)}限定)</span>
              </div>
            : null}
            {card.visionAbility ?
              <div className={css.paragraph}>
                <span className={css.keyText}>ビジョンアビリティ: </span>
                <br/>
                <span>{card.visionAbility}</span>
                <br/>
                <span>({card.visionAbilityConditions})</span>
              </div>
            : null}
          </div>
          <div className={css.statusWrap}>
            <table className={css.statusTable}>
              <thead>
                <tr>
                  <th></th>
                  <th className={css.tableCaption}>HP</th>
                  <th className={css.tableCaption}>TP</th>
                  <th className={css.tableCaption}>AP</th>
                  <th className={css.tableCaption}>攻撃</th>
                  <th className={css.tableCaption}>魔力</th>
                  <th className={css.tableCaption}>防御</th>
                  <th className={css.tableCaption}>精神</th>
                  <th className={css.tableCaption}>器用さ</th>
                  <th className={css.tableCaption}>スピード</th>
                  <th className={css.tableCaption}>運</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={css.tableCaption}>初期</td>
                  <td>{card.hp}</td>
                  <td>{card.tp}</td>
                  <td>{card.ap}</td>
                  <td>{card.power}</td>
                  <td>{card.magic}</td>
                  <td>{card.shield}</td>
                  <td>{card.barrier}</td>
                  <td>{card.dexterity}</td>
                  <td>{card.speed}</td>
                  <td>{card.luck}</td>
                </tr>
                <tr>
                  <td className={css.tableCaption}>最大</td>
                  <td>{card.maxHp}</td>
                  <td>{card.maxTp}</td>
                  <td>{card.maxAp}</td>
                  <td>{card.maxPower}</td>
                  <td>{card.maxMagic}</td>
                  <td>{card.maxShield}</td>
                  <td>{card.maxBarrier}</td>
                  <td>{card.maxDexterity}</td>
                  <td>{card.maxSpeed}</td>
                  <td>{card.maxLuck}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={css.corner}/>
        </div>
      </div>
    )
  }
}

export default Card;
