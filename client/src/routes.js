import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThankYou from './pages/thankYou/thankyou'
import Home from './pages/home/home'


const _routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/thankyou',
    exact: true,
    component: ThankYou
  },
 
]

export default (
  <Switch>
    {_routes.map((route, i) => (
      <Route
        exact
        path={route.path}
        render={props => (
          <route.component key={`route${i}`} {...props} />
        )}
      />
    ))}
  </Switch>
)