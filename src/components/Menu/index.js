import React from 'react'
import style from './index.module.scss'
import { Menu } from 'antd';
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;

export default class SelfMenu extends React.Component {
  render() {
    const { routes, token } = this.props
    return (
      <>
        { token && <Menu
          className={style['menu']}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
          {
            routes.map((item, index) => {
              return <Menu.Item key={index}><Link to={item.path}>{item.routeName}</Link></Menu.Item>
            })
          }
        </Menu>}
      </>
    )
  }
}