import { AppBar, Toolbar, Avatar } from "@mui/material"
import  MenuIcon from '@mui/icons-material/Menu';

function Navbar(){
    return(
      <AppBar position="absolute">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <MenuIcon/>
            <Avatar sx={{ width: 25, height: 25, margin: '1px' }}>H</Avatar>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
