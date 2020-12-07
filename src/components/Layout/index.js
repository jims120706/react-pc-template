import React from 'react'
import style from './index.module.scss'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style['layout']}>我是中间</div>
    )
  }
}