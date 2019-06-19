import React from 'react'
import { Button } from 'antd'
import { connect } from 'dva'

@connect(({ test }) => ({
  test
}))

export default class Test extends React.Component {
  state = {}

  click() {
    const { dispatch } = this.props
    // dispatch({
    //   type: 'test/fetchTest',
    //   payload: {}
    // })
    dispatch({
      type: 'test/testCors',
      payload: {}
    })
  }
  render() {
    return (
      <>
        <h1>hello world</h1>
        {
          this.props.test && this.props.test.list.reduce((r, c) => {
            return [
              ...r,
              <div key={c.key}>名字: {c.name}/ 年龄: {c.age}</div>
            ]
          }, [])
        }
        <Button type='primary' onClick={this.click.bind(this)} >点击</Button>
      </>
    )
  }
}
