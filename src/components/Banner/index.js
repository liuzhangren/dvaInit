import React from 'react'
// import {
 
// } from 'antd'
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
        <img width='100%' height='520px' src='https://www.marinedigitalrepublic.com/images/home-banner.png'></img>
      </div>
    )
  }
}