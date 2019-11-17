
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Router } from 'dva/router'
import dynamic from 'dva/dynamic'
import 'antd/dist/antd.css'

const Routers = function ({ history, app }) {
  history.listen((location)=>{
    switch (location.pathname) {
      case '/':
        document.title = '船舶资产交易数字化平台'
        break
      default:
        document.title = '船舶资产交易数字化平台'
        break
    }
  })

  const routes = [
    {
      path: '/',
      models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage'),
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