import React from 'react';

// import Button, { ButtonType, ButtonSize } from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} size="10x"></FontAwesomeIcon>
      <Menu defaultIndex='0'
        mode="vertical"
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>cool link 1</MenuItem>
        <MenuItem>cool link 2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop down 1</MenuItem>
          <MenuItem>drop down 2</MenuItem>
          <MenuItem>drop down 3</MenuItem>
        </SubMenu>
        <MenuItem disabled>cool link 3</MenuItem>
      </Menu>

      {/* <Button>button</Button>
      <Button disabled>disabled</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>Large Primary</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>small danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Link Disabled</Button> */}
    </div>
  );
}

export default App;
