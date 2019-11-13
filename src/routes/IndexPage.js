import React from 'react'
// import {
//   Icon
// } from 'antd'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ContentOne from '../components/ContentOne'
import ContentTwo from '../components/ContentTwo'
import ContentThree from '../components/ContentThree'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import card from '../assets/card.jpg'
import style from './index.css'
export default class Index extends React.Component {
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
        size: 'Normal'
      })
    }
  }
  
  render() {
    // const { size } = this.state
    return (
      <div className={style.totalContainer}>
        <Header />
        <Banner />
        <Card />
        {/* <div className={style[`card${size}`]}>
          <div className={style.bigTitle}>Set sail on an alternative investment opportunity in the lucrative ship owning industry</div>
          <div className={style.smallTitle}>MDR is a blockchain-based platform that cuts out ship owning barrier-of-entry costs and allows everyone to become a ship owner</div>
          <img className={style.cardPic} width='100%' src={card}></img>
        </div> */}
        <ContentOne />
        <ContentTwo />
        <ContentThree />
        <Footer />
        {/* <div className={style.help} >
          <Icon type="question-circle" />
          &nbsp; 帮助
        </div> */}
      </div>
    )
  }
}