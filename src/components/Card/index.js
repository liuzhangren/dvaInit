import React from 'react'
import card from '../../assets/card.jpg'
import style from './index.css'


export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.bigTitle}>Set sail on an alternative investment opportunity in the lucrative ship owning industry</div>
          <div className={style.smallTitle}>MDR is a blockchain-based platform that cuts out ship owning barrier-of-entry costs and allows everyone to become a ship owner</div>
          <img alt='card' className={style.cardPic} width='100%' src={card}></img>
        </div>
      </div>
    )
  }
}