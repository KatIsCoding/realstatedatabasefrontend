import { AppBar, IconButton, Toolbar, Fab } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Menu as MenuIcon, Add as AddIcon } from '@mui/icons-material'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export const Footer = () => {
  return (<footer>
        <AppBar position="fixed" sx={{top: 'auto', bottom: 0}}>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <StyledFab color="secondary" aria-label="add">
              <AddIcon />
            </StyledFab>
          </Toolbar>
        </AppBar>
      </footer>)
}