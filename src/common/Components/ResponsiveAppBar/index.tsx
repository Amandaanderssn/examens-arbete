import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AppBar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../../contexts/userContext";
// import Logo from '../../../images/Logga.svg'
import PinkLogo from '../../../images/RosaLogga.svg'
import GreenLogo from '../../../images/GrönLogga.svg'

const ResponsiveAppBar = (): React.JSX.Element => {
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { user, setUser } = useUser()
    const navigate = useNavigate()
    const { myProfile } = useParams()

    const handleLogOut = () => {
        setUser(null)
        navigate('/login')
    }

    const pages = [
        {
            name: 'Start',
            callback: () => navigate("/StartPage"),
        },
        {
            name: 'Search for offers',
            callback: () => navigate('/Search'),
        }
    ];

    const settings = [
        {
            name: 'My profile',
            callback: () => { navigate('/myProfile'); handleCloseUserMenu() }
        },
        {
            name: 'Logout',
            callback: () => handleLogOut()
        }
    ];

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    return (
        <AppBar position="static" sx={{ width: '100vw', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/StartPage"
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
                        {myProfile ?
                            <img src={PinkLogo} style={{ width: '5rem', marginTop: '1rem' }} />

                            :
                            <img src={GreenLogo} style={{ width: '5rem', marginTop: '1rem' }} />

                        }
                    </Typography>

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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }} onClick={page.callback}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    {/* <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'right', marginRight: '1rem' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={page.callback}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp">{user?.username.charAt(0).toUpperCase()}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
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
                                <MenuItem key={setting.name} onClick={setting.callback}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

