import React from 'react'
import {
  Icon
} from 'antd'
import logo from '../../assets/logo.png'
import style from './index.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
      visible: false
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
  showVerticalMenu() {
    this.setState({
      visible: true
    })
  }
  hideVerticalMenu() {
    this.setState({
      visible: false
    })
  }
  render() {
    const { size } = this.state
    // console.log(`headerItem1${size}`)
    const verticalStyl = this.state.visible? {
      width: '280px',
      height: `${window.innerHeight}px`,
      border: '1px solid rgba(247,250,251)',
      backgroundColor: 'white',
      position: "absolute",
      left: 0,
      display: 'block'
    }:{
      width: '280px',
      height: `${window.innerHeight}px`,
      border: '1px solid rgba(247,250,251)',
      backgroundColor: 'white',
      position: "absolute",
      left: 0,
      display: 'none'
    }
    return (
      <>
        <div className={style.headerContainer}>
          <div className={style[`headerItem1${size}`]}>
            {
              this.state.visible?
              <Icon 
                className={style[`headerItem1Icon${size}`]} 
                type="close"
                onClick={this.hideVerticalMenu.bind(this)}
              />:
              <Icon 
                className={style[`headerItem1Icon${size}`]} 
                type="menu"
                onClick={this.showVerticalMenu.bind(this)}
              />
            }
            <img alt='logo' className={style[`headerItem1Logo${size}`]} width='35px' src={logo}></img>
            <div style={{
              fontSize: '16px',
              marginLeft: '4px'
            }} >
              <span style={{color: 'rgba(143, 148, 153)', fontWeight: 200, marginLeft: '6px'}}>
                Marine
              </span> 
              <span style={{
                color: 'rgba(106, 113, 120)', 
                marginLeft: '6px',
                fontWeight: 600
              }}>
                Digital Republic
              </span>
            </div>
          </div>
          <div className={style[`headerItem2${size}`]}>
            <a>Investment Offering</a>
            <a>Exchange</a>
            <a>Market information</a>
            <a>About Us</a>
            <a>Existing Shipowners</a>
            <a>Help</a>
          </div>
          <div className={style[`headerItem3${size}`]}>
            <div className={style[`headerItem3Btn1${size}`]}>Log In</div>
            <div className={style[`headerItem3Btn2${size}`]}>Sign Up</div>
          </div>
        </div>
        <div style={verticalStyl}>
          <div className={style.logAndSign}>
            <div className={style.log}>
              Log In
            </div>
            <div className={style.sign}>
              Sign Up
            </div>
          </div>
          <div className={style.verticalItem}>Investment Offering</div>
          <div className={style.verticalItem}>Exchange</div>
          <div className={style.verticalItem}>Market information</div>
          <div className={style.verticalItem}>About Us</div>
          <div className={style.verticalItem}>Existing Shipowners</div>
          <div className={style.verticalItem}>Help</div>
        </div>
      </>
    )
  }
}