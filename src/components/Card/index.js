import React from 'react'
import card from '../../assets/card.jpg'
import style from './index.css'


export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: ''
    } 
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    if(window.innerWidth < 750) {
      this.setState({
        size: 'Small'
      })
    }else {
      this.setState({
        size: 'Normal'
      })
    }
  }
  componentWillUnmount() {       
    window.removeEventListener('resize',this.handleResize.bind(this));
  }
  handleResize(e) {
    if(e.target.innerWidth < 750) {
      this.setState({
        size: 'Small'
      })
    }else {
      this.setState({
        size: 'Normal',
        visible: false
      })
    }
  }
  render() {
    const { size } = this.state
    return (
      <div className={style.container}>
        <div className={style[`cardContainer${size}`]}>
          <div className={style.bigTitle}>Set sail on an alternative investment opportunity in the lucrative ship owning industry</div>
          <div style={{width: '100%'}}>
            <div className={style.line}></div>
          </div>
          <div className={style.smallTitle}>MDR is a blockchain-based platform that cuts out ship owning barrier-of-entry costs and allows everyone to become a ship owner</div>
          <img alt='card' className={style.cardPic} width='100%' src={card}></img>
        </div>
      </div>
    )
  }
}