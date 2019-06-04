
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Router } from 'dva/router'
import dynamic from 'dva/dynamic'

const Routers = function ({ history, app }) {
  history.listen((location)=>{
    switch (location.pathname) {
      case '/test':
        document.title = '测试'
        break
      default:
        document.title = 'dva'
        break
    }
  })

  const routes = [
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
                     exact={(path.indexOf('/technological') !== -1 || path.indexOf('/teamShow') !== -1 )? false : true}
                     path={path}
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