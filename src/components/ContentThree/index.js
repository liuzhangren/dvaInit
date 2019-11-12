import React from 'react'
import style from './index.css'
import {
  Icon
} from 'antd'
import phone from '../../assets/phone.jpg'

export default class ContentThree extends React.Component {
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
        <div className={style[`content${size}`]}>
          <div className={style[`contentLeft${size}`]}>
            <div className={style[`title${size}`]}>
              The MDR Wallet
            </div>
            <div className={style.content}>
              Marine Digital Republic is a decentralized app and web platform that operates using the state-of-the-art blockchain infrastructure technology. Users can upload USD to purchase MDRX, a simple stablecoin always equal in value to one US dollar. From there, MDRX may be used to purchase pieces of specific ships in whatever quantity the user wishes.
            </div>
            <div className={style[`start${size}`]}>
              Get Started &nbsp;&nbsp;
              <Icon type="arrow-right" />
            </div>
          </div>
          <div className={style[`contentRight${size}`]}>
            <img alt='' src={phone}></img>
          </div>
        </div>
      </div>
    )
  }
}