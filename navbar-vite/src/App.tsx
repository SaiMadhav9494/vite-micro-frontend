import {Drawer, MenuList, MenuItem, ListItemText} from '@mui/material';
import * as React from 'react';

function App({isMenuOpen, closeMenu} : {isMenuOpen: boolean, closeMenu: () => void}) {
  const [number, setNumber] = React.useState(1);
  return <div>
    {number}
  </div>
  // return <Drawer open={isMenuOpen} onClose={closeMenu}>
  //     <div style={{width: 'auto'}} role="presentation" onClick={closeMenu} onKeyDown={closeMenu}>
  //       <MenuList>
  //         <MenuItem>
  //           <ListItemText primary="Item 3"/>
  //         </MenuItem>

  //         <MenuItem>
  //           <ListItemText primary="Item 4"/>
  //         </MenuItem>
  //       </MenuList>
  //     </div>
  //   </Drawer>
}

export default App;
