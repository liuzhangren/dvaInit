import React from 'react'
import {
  Icon
} from 'antd'
import qrcode from '../../assets/qrcode.png'
import style from './index.css'

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
          <span className={style.title}>条款说明</span>
          <div className={style.href}>投资者协议</div>
          <div className={style.href}>隐私保护</div>
          <div className={style.href}>法律声明</div>
          <div className={style.href}>反洗钱和反恐怖融资用户指引</div>
          <div className={style.href}>费率</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>公告信息</span>
          <div className={style.href}>招聘需求</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>加入我们</span>
          <div className={style.href}>关于MDR</div>
          <div className={style.href}>关于STO</div>
          <div className={style.href}>关于航运市场</div>
          <div className={style.href}>合作伙伴</div>
          <div className={style.href}>联系我们</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>声明</span>
          <div className={style.href}>公告信息</div>
          <div className={style.href}>上币申请</div>
          <div className={style.href}>帮助中心</div>
        </div>
        <div className={style[`item${size}`]}>
          <span className={style.title}>官方媒体</span>
          <div style={{
            width: '100%',
            display:'flex',
            justifyContent: 'start',
            fontSize: '16px',
            marginTop: '4px',
            marginBottom: '4px'
          }}>
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="facebook" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="twitter" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="wechat" />
            <Icon style={{marginRight: '8px', cursor: 'pointer'}} type="medium" />
          </div>
          <div>
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
        <div className={style[`copy${size}`]} >&copy;船舶资产交易数字化平台有限公司 All Rights Reserved.</div>
      </div>
    )
  }
}