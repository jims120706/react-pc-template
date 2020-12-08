import React from 'react'
import style from './index.module.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from '../../views/NotFound'

export default class Routes extends React.Component {
  render() {
    const { routes, token } = this.props
    // console.log("props", this.props)
    return (
      // <div className={style['routes']}>路由</div>
      <div className={style['routes']}>
        <Switch>
          {
            routes && routes.length > 0 && routes.map((item) => {
              return <Route exact path={item.path} render={props => {
                return item.auth ? (token ? item.redirect ? <Redirect to={{ pathname: item.redirect }} /> : <item.component {...props} /> : <Redirect to={{ pathname: '/login' }} />) : <item.component {...props} />
              }} key={item.path} />
            })
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}