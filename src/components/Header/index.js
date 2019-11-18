import React from 'react'
import {
  Icon,
  Menu, 
  Dropdown
} from 'antd'
import logo from '../../assets/logo.png'
import style from './index.css'
import { Link } from 'dva/router'
import CONST from '../../const'
const { 
  SIGNUP,
  LOGIN,
  HOWTOLOGIN,
  HOWTORECHARGE,
  HOWTOPAY,
  HOWTOBUY,
  ABOUTMDR,
  ABOUTSTO,
  ABOUTMARINE,
  MARKET,
  EXCHANGE
 } = CONST
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
  jumpTo(href) {
    window.location.href = href
  }
  render() {
    const { size } = this.state
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
    const menuHelp = (
      <Menu>
        <Menu.Item key='0'>
          <a href={HOWTOLOGIN}>如何登录/注册</a>
        </Menu.Item>
        <Menu.Item key='1'>
          <a href={HOWTORECHARGE}>如何充值/提现</a>
        </Menu.Item>
        <Menu.Item key='2'>
          <a href={HOWTOPAY}>如何买入/卖出</a>
        </Menu.Item>
        <Menu.Item key='3'>
          <a href={HOWTOBUY}>如何买入申购新股</a>
        </Menu.Item>
      </Menu>
    )
    const menu = (
      <Menu>
        <Menu.Item key='0'>
          <a href={ABOUTMDR}>About MDR</a>
        </Menu.Item>

        <Menu.Item key='1'>
          <a href={ABOUTSTO}>About STO</a>
        </Menu.Item>

        <Menu.Item key='2'>
          <a href={ABOUTMARINE}>About Marine</a>
        </Menu.Item>

        <Menu.Item style={{display: 'flex', justifyContent: 'space-arround', alignItems: 'center'}} key='3'>
          <Dropdown overlay={menuHelp} placement="bottomLeft" trigger={['hover']}>
            <a style={{width: '100%'}}>Help</a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
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
            <Link to='/'>Home</Link>
            <a href={MARKET}>Market Information</a>
            <a href={EXCHANGE}>Exchange</a>
            <Dropdown overlay={menu} trigger={['click']}>
              <a>About Us</a>
            </Dropdown>
            {/* <a>Existing Shipowners</a>
            <a>Help</a> */}
          </div>
          <div className={style[`headerItem3${size}`]}>
            <a href={LOGIN} className={style[`headerItem3Btn1${size}`]}>Log In</a>
            <div onClick={this.jumpTo.bind(this, LOGIN)} className={style[`headerItem3Btn2${size}`]}>Sign Up</div>
          </div>
        </div>
        <div style={verticalStyl}>
          <div className={style.logAndSign}>
            <div onClick={this.jumpTo.bind(this, LOGIN)} className={style.log}>
              Log In
            </div>
            <div onClick={this.jumpTo.bind(this, LOGIN)} className={style.sign}>
              Sign Up
            </div>
          </div>
          <div onClick={this.jumpTo.bind(this, 'https://www.marinedigitalrepublic.com/#/')} className={style.verticalItem}>HOME</div>
          <div onClick={this.jumpTo.bind(this, EXCHANGE)} className={style.verticalItem}>Exchange</div>
          <div onClick={this.jumpTo.bind(this, MARKET)} className={style.verticalItem}>Market information</div>
          <div onClick={this.jumpTo.bind(this, ABOUTMDR)} className={style.verticalItem}>About MDR</div>
          <div onClick={this.jumpTo.bind(this, ABOUTSTO)} className={style.verticalItem}>About STO</div>
          <div onClick={this.jumpTo.bind(this, ABOUTMARINE)} className={style.verticalItem}>About Marine</div>
          <div onClick={this.jumpTo.bind(this, HOWTOLOGIN)} className={style.verticalItem}>Help</div>
        </div>
      </>
    )
  }
}