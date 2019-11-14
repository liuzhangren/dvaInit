import React from 'react'
import {
  Icon
} from 'antd'
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
  render() {
    const { size } = this.state
    return (
      <div className={style.container}>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Terms of Service</span>
          <div className={style.href}>User Agreement</div>
          <div className={style.href}>Privacy Policy</div>
          <div className={style.href}>Legal Statement</div>
          <div className={style.href}>Regulations of AML&ATF</div>
          <div className={style.href}>Free</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Join Us</span>
          <div className={style.href}>Recruitment</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Announcement</span>
          <div className={style.href}>About MDR</div>
          <div className={style.href}>About STO</div>
          <div className={style.href}>About Marine</div>
          <div className={style.href}>Partners</div>
          <div className={style.href}>Contact Us</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>Declaration</span>
          <div className={style.href}>Announcement</div>
          <div className={style.href}>STO Application</div>
          <div className={style.href}>Help</div>
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