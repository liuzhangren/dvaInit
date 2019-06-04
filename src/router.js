
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Router } from 'dva/router'
import dynamic from 'dva/dynamic'
import 'antd/dist/antd.css'

const Routers = function ({ history, app }) {
  history.listen((location)=>{
    switch (location.pathname) {
      case '/test':
        document.title = '测试'
        break
      case '/':
        document.title = '主页'
        break
      default:
        document.title = 'dva'
        break
    }
  })

  const routes = [
    {
      path: '/',
      models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage'),
    },
    {
      path: '/test',
      models: () => [import('./models/test')],
      component: () => import('./routes/test'),
    }
  ]

  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => {
            return (
              <Route key={key}
                     path={path}
                     exact={true}
                     component={dynamic({
                       app,
                       ...dynamics,
                     })}
              />
            )
          })
        }
      </Switch>
    </Router>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers