import { AppBar, IconButton, Toolbar, Fab } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import { Link, useLocation } from 'react-router-dom'


const IconStyle = {
  height: '46px',
  width: '46px',
}



export const Header = () => {
  const location = useLocation();

  const checkForActive = (path: string) => {
    return location.pathname === path ? 'white' : 'black';
  }

  
  return (<header>
        <AppBar position="fixed" sx={{top: 0, bottom: 'auto'}}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to={'/people'}>
              <IconButton>
                <AccountCircleRoundedIcon style={{color: checkForActive('/people'), ...IconStyle}}/>
              </IconButton>
            </Link>
            <Link to={'/'}>
              <IconButton>
                <SupervisedUserCircleRoundedIcon style={{color: checkForActive('/'), ...IconStyle}}/>
              </IconButton>
            </Link>
            <Link to={'/properties'}>
              <IconButton>
                <AddBusinessRoundedIcon style={{color: checkForActive('/properties'), ...IconStyle}}/>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </header>)
}