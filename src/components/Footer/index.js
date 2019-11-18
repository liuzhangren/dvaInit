import React from 'react'
// import {
//   Icon
// } from 'antd'
import qrcode from '../../assets/qrcode.png'
import style from './index.css'
import wechat from '../../assets/weixin.png'
import twitter from '../../assets/tuitetwitter43.png'
import face from '../../assets/tian7_facebook.png'
import mail from '../../assets/youjian.png'
export default class Footer extends React.Component {
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
  jump(href) {
    window.location.href = href
  }
  render() {
    const { size } = this.state
    return (
      <div className={style.container}>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Terms of Service</span>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/login')} className={style.href}>User Agreement</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/privacy-policy')}className={style.href}>Privacy Policy</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/statement')} className={style.href}>Legal Statement</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/user-guide')} className={style.href}>Regulations of AML&ATF</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/fee-instruction')} className={style.href}>Free</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Join Us</span>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/requirements')} className={style.href}>Recruitment</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Announcement</span>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/aboutmdr')} className={style.href}>About MDR</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/aboutsto')} className={style.href}>About STO</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/aboutmarinemarket')} className={style.href}>About Marine</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/partners')} className={style.href}>Partners</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/contactus')} className={style.href}>Contact Us</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Declaration</span>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/announcement')} className={style.href}>Announcement</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/user-sign')} className={style.href}>STO Application</div>
          <div onClick={this.jump.bind(this, 'https://lcr.marinedigitalrepublic.com/helpcenter')} className={style.href}>Help</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Official Media</span>
          <div style={{
            width: '100%',
            display:'flex',
            justifyContent:'start',
            fontSize: '16px',
            marginTop: '4px',
            marginBottom: '4px',
            marginLeft: '15%'
          }}>
            {/* <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="facebook" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="twitter" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="wechat" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="medium" /> */}
            <img style={{marginRight: '4px', cursor: 'pointer'}} alt='face' src={face} />
            <img style={{marginRight: '4px', cursor: 'pointer'}} alt='twitter' src={twitter} />
            <img style={{marginRight: '4px', cursor: 'pointer'}} alt='wechat' src={wechat} />
            <img style={{marginRight: '4px', cursor: 'pointer'}} alt='mail' src={mail} />
          </div>
          <div style={{marginLeft: '15%'}}>
            <img alt='' width='100px' src={qrcode}></img>
          </div>
        </div>
        {
          size==='Small'?
          <div className={style[`item${size}`]}>
            {/* <span className={style.title}>官方媒体</span> */}
          </div>:
          ''
        }
        <div className={style.line}></div>
        <div className={style[`copy${size}`]} >&copy;船舶资产交易数字化平台有限公司 All Rights Reserved.</div>
      </div>
    )
  }
}