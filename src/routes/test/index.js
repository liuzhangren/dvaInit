import React from 'react'
import { Row, Col } from 'antd'


export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  click(index) {
    console.log(index)
  }
  render() {
    const arr = [1, 2, 3, 4, 5]
    return (
      <div>
        {
          arr.map(function(item, i) {
            return <div onClick={this.click.bind(this, i)}>{item}</div>
          })
        }
      </div>
    )
  }
}