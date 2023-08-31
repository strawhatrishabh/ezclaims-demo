import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Person3Icon from '@mui/icons-material/Person3';
import LoginIcon from '@mui/icons-material/Login';
import LanguageIcon from '@mui/icons-material/Language';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Header.css';


// export default function Header() {
//   return (
//     <>
//     {/* <Box sx={{ flexGrow: 1 }}>
        
//       <AppBar position="static">
//       <Container maxWidth="lg">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <img src="images/eq-logo-brand-bar.png" alt="logo" className='logo'/>
//           </Typography>
//           <Button color="inherit" className="nav-btn">
//           <LanguageIcon fontSize="small" />
//            <span> Français</span>
//             </Button>
//           <Button color="inherit" className="nav-btn">
//           <Person3Icon fontSize="small" />
//            <span> Vikash</span>
//             </Button>
//           <Button color="inherit">
//           <LoginIcon fontSize="small" />
//             <span> Login</span>
//             </Button>
//         </Toolbar>
//         </Container>
//       </AppBar>

//     </Box> */}

// {/* <Container maxWidth="lg">

// </Container> */}
// </>
//   );
// }



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Logout'];
const settingsLang = ['English', 'Freanch'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLang, setAnchorElLang] = React.useState("English");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
//   const handleOpenUserMenu2 = (event) => {
//     setAnchorElLang(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
//   const handleCloseUserMenu2 = () => {
//     setAnchorElLang(null);
//   };

  return (
    <>
    <AppBar position="static" sx={{backgroundColor:'#ffffff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="images/eq-logo-brand-bar-blue.png" alt="logo" className='logo'/>
          </Typography>
          <Box
          sx={{
            flexGrow: 1,
            ml: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Roboto',
            fontWeight: 500,
            color: '#000',
            fontSize: 14,
            textDecoration: 'none',
          }}
          >
            Ibawtlh6 swfblt nmp - Policy 810004 Certificate 0000000105.
          </Box>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src="images/eq-logo-brand-bar-blue.png" alt="logo" className='logo'/>
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                {anchorElLang}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar2"
              anchorEL={anchorElLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseUserMenu2}
            >
              {settingsLang.map((settingLang) => (
                <MenuItem key={settingLang} onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">{settingLang}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <Box sx={{flexGrow: 0, color: '#000000', fontWeight: 500}}>
          <LanguageIcon fontSize="small" /> Français
          </Box> */}
          <Button color="inherit" className="nav-btn" sx={{flexGrow: 0, color: '#000000', fontWeight: 400, border: '1px solid #ddd',
    backgroundColor: '#f5f5f5', fontSize:{ xs: '12px', md: '14px' }}}>
            <LanguageIcon sx={{paddingRight:0.25, fontSize:{ xs: '17px', md: '21px' }}}/>
            <span> Français</span>
            </Button>
            
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="#084bc7"
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon sx={{color:"#084bc7"}} />
              </Badge>
            </IconButton>

          <Box sx={{ flexGrow: 0, marginLeft:1.5 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'#FFC300'}} className="userIcon"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
              <Box className="mobilePolicy-text"
              sx={{
                flexGrow: 1,
                px: 2,
                my:2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Roboto',
                fontWeight: 500,
                color: '#000',
                fontSize: 14,
                textDecoration: 'none',
                justifyContent: 'center'
              }}
              >
                Ibawtlh6 swfblt nmp - Policy 810004 Certificate 0000000105.
              </Box>
              </>
  );
}
export default Header;