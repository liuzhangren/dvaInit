import React from 'react'
import style from './index.css'
import ship1 from '../../assets/ship1.jpg'
import ship2 from '../../assets/ship2.jpg'
import ship3 from '../../assets/ship3.jpg'
import ship4 from '../../assets/ship4.jpg'

export default class ContentOne extends React.Component {
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
        <div className={style.contentNormal}>
          <div className={style[`contentItem${size}`]}>
            <div className={style.introduce}>
              <div className={style.introduceTitle}>
                Dry Bulk Carriers
              </div>
              <div style={{textAlign: 'left'}}>
                &nbsp; &nbsp;&nbsp; &nbsp;Bulk carriers transport merchandise that cannot be stored in containers. This includes raw resources like timber, coal, cement, grain, iron ore, etc. Bulk carriers are equipped with special tools to assist with the transportation of these goods.
                Bulk cargo is often transported in full shiploads. There has been consistent growth in the worldwide volume of merchandise transported by bulk carriers since 1980.
              </div>
            </div>
            <div className={style.pic}>
              <img width='100%' alt='' style={{marginTop: '102px'}} src={ship1}></img>
            </div>
            
          </div>
          <div className={style[`contentItem${size}`]}>
            <div className={style.introduce}>
              <div className={style.introduceTitle}>
                Container Ships
              </div>
              <div style={{textAlign: 'left'}}>
                &nbsp; &nbsp;&nbsp; &nbsp;Most merchandise that is transported by ocean freight travels by container ship. Container ships carry their cargo in reusable, standardized 20- or 40-foot long containers that are designed to be easily transferred from the ship to a truck or train without the need to access the cargo directly. The freight capacity of a container ship is described in twenty-foot equivalent units (TEUs).
                Container ships transport cargo poorly suited for bulk cargo shipping operations. Most general cargo is now transported by containerships. There has been relatively steady growth in the worldwide volume of merchandise transported by container ships since 1980.
              </div>
            </div>
            <div className={style.pic}>
              <img width='100%' alt='' src={ship2}></img>
            </div>
          </div>
          <div className={style[`contentItem${size}`]}>
            <div className={style.introduce}>
              <div className={style.introduceTitle}>
                Tankers
              </div>
              <div style={{textAlign: 'left'}}>
                &nbsp; &nbsp;&nbsp; &nbsp;Tankers share similarities with bulk carriers, but specifically transport crude oil and related products. Tankers are classified by their deadweight tonnage (DWT), with the smallest size group being 10,000 – 19,999 DWT and the largest over 200,000 DWT. Tankers are also categorized by the products they carry, crude or product.
              </div>
            </div>
            <div className={style.pic}>
              <img width='100%' alt='' src={ship3}></img>
            </div>
          </div>
          <div className={style[`contentItem${size}`]}>
            <div className={style.introduce}>
              <div className={style.introduceTitle}>
                Specialist Ships
              </div>
              <div style={{textAlign: 'left'}}>
                &nbsp; &nbsp;&nbsp; &nbsp;Specialist ships are a broad group of ocean-faring vessels designed to function in support of other types of maritime vessels or to perform activities related to specific industries. Some prominent examples are highly specialized transportation vessels like LPG/LNG carriers, RORO/ROPAX, cruise, offshore ships, and others.
              </div>
            </div>
            <div className={style.pic}>
              <img style={{marginTop: '30px'}} width='100%' alt='' src={ship4}></img>
            </div>
          </div>
          <div className={style[`investBtn${size}`]}>Invest Now</div>
        </div>
        
      </div>
    )
  }
}