import React from 'react'
import style from './index.module.scss'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style['footer']}>我是底</div>
    )
  }
}