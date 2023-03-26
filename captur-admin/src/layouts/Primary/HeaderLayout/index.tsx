import React, { useCallback } from 'react'
import { Menu } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { LoginOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from '@/store'

import styles from './style.module.less'
import './headerLayout.less'
import { logout } from '@/store/userSlice'

interface IMenu {
  label: string
  url?: string
  children?: IMenu[]
}

const menus: IMenu[] = [{ label: 'APP MANAGEMENT', url: '/admin/projects' }]

export const HeaderLayout: React.FC = () => {
  const history = useHistory()
  const userInfo = useSelector((state) => state.user)
  const location = useLocation()
  const dispatch = useDispatch()

  const jump = useCallback(
    (url: string) => {
      history.push(url)
    },
    [history]
  )

  const renderMenuItems = (menus: IMenu[]) => {
    return menus.map((menu) => {
      const { label, url } = menu
      return (
        <Menu.Item key={url} onClick={() => url && jump(url)}>
          {label}
        </Menu.Item>
      )
    })
  }

  const getSelected = useCallback<(menus: IMenu[]) => string[]>(
    (menus, keys = []) => {
      return menus.reduce<string[]>((keys, menu) => {
        if (Array.isArray(menu.children) && menu.children.length > 0) {
          const selected = getSelected(menu.children)
          selected.length > 0 && keys.unshift(menu.label, ...selected)
          return keys
        }

        if (menu.url === location.pathname) {
          return keys.concat(menu.url)
        }

        return keys
      }, keys)
    },
    [location]
  )

  const renderMenus = (menus: IMenu[]) => {
    const selectedKeys = getSelected(menus)
    return (
      <Menu selectedKeys={selectedKeys} selectable={true} mode="horizontal" style={{ borderBottom: 'none', flex: 1 }}>
        {menus.map((menu) => {
          const { label, children } = menu
          if (Array.isArray(children) && children.length > 0) {
            return (
              <Menu.SubMenu title={label} key={label}>
                {renderMenuItems(children)}
              </Menu.SubMenu>
            )
          }

          return renderMenuItems([menu])
        })}
      </Menu>
    )
  }

  return (
    <div className="header-container">
      <div className={styles.layout}>
        <div className={styles.logo}>FeedBack</div>
        {renderMenus(menus)}

        <div className={styles.name}>
          {userInfo?.email || '-'}
          <LoginOutlined
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('logout')
              dispatch(logout())
            }}
            style={{ marginLeft: 10, fontSize: 16 }}
          />
        </div>
      </div>
    </div>
  )
}

HeaderLayout.displayName = 'HeaderLayout'
