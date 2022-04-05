import { AppBar, IconButton, Toolbar, Fab, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Menu as MenuIcon, Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(false);

  return (<footer>
        <AppBar position="fixed" sx={{top: 'auto', bottom: 0}}>
          <Toolbar>
            <IconButton onClick={() => {setAnchorEl(true)}}>
              <MenuIcon />
            </IconButton>
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
          </Toolbar>
          <Menu 
          id='more-options-menu'
          open={open}
          onClose={handleClose}
          >
            {
              <MenuItem onClick={() => {console.log('Option 1 Clicked')}}>
                Hello World
              </MenuItem>
            }
          </Menu>
        </AppBar>
      </footer>)
}