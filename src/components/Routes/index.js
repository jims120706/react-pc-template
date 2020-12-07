import React from 'react'
import style from './index.module.scss'
import { Route, Switch } from 'react-router-dom'

export default class Routes extends React.Component {
  render() {
    console.log('this.props', this.props)
    const routes = this.props.routes
    return (
      // <div className={style['routes']}>路由</div>
      <div className={style['routes']}>
        <Switch>
          {
            routes && routes.length > 0 && routes.map((item) => {
              return <Route exact path={item.path} component={item.component} key={item.path} />
            })
          }
        </Switch>
      </div>
    )
  }
}