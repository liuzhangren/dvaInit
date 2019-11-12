import React from 'react'
import style from './index.css'
import flow from '../../assets/flow.jpg'

export default class ContentOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
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
          <div className={style[`left${size}`]}>
            <div className={style[`leftTitle${size}`]}>A New Investment Option</div>
            <div style={{
              display: size === 'Small'?'none':'block'
            }} className={style.line}></div>
            <div className={style[`leftContent${size}`]}>Investments at MDR differ from other platforms in that all its investments are backed by real-world dollars and shipping assets</div>
          </div>
          <div className={style[`right${size}`]}>
            <img width='80%' className={style[`img${size}`]} alt='' src={flow}></img>
          </div>
        </div>
      </div>
    )
  }
}