import React from 'react'
import logo from '../../assets/home-banner.png'
import style from './index.css'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={style.bannerContainer}>
        <img alt='banner' width='100%' height='520px' src={logo}></img>
      </div>
    )
  }
}