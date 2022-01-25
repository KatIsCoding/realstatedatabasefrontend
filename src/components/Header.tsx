import { AppBar, IconButton, Toolbar, Fab } from '@mui/material'
import { styled } from '@mui/material/styles'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';

const IconStyle = {
  height: '46px',
  width: '46px',
}


export const Header = () => {
  return (<header>
        <AppBar position="fixed" sx={{top: 0, bottom: 'auto'}}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
            <IconButton>
              <AccountCircleRoundedIcon style={{color: 'black', ...IconStyle}}/>
            </IconButton>
            <IconButton>
              <SupervisedUserCircleRoundedIcon style={{color: 'white', ...IconStyle}}/>
            </IconButton>
            <IconButton>
              <AddBusinessRoundedIcon style={{color: 'black', ...IconStyle}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>)
}