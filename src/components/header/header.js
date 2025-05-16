import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

import Logo from '../../assets/logo.png';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Person3Icon from '@mui/icons-material/Person3';
import Stack from '@mui/material/Stack';
import Styles from './header.module.css';
import Paper from '@mui/material/Paper';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null); // Also fix React.useState to useState
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className={Styles.header}>
                    <Grid size={{ xs: 10, md: 10 }}>
                        <Box>
                            <Toolbar>
                                <img src={Logo} alt="logo" height={40} />
                                <Box className={Styles.navMenus} sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <ul>
                                        <li><a className={Styles.active} href="/">Home</a></li>
                                        <li><a href="#">Men's</a></li>
                                        <li><a href="#">Women's</a></li>
                                        <li><a href="#">Kids</a></li>
                                        <li><a href="#">Beauty</a></li>
                                        <li><a href="#">Electronics</a></li>
                                        <li><a href="#">Shoes</a></li>
                                    </ul>
                                </Box>
                                <Box sx={{ width: '100%' }}>
                                    <Search className={Styles.SearchBaritem}>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <input type="text" placeholder="Enter Products Here..." />
                                    </Search>
                                </Box>
                                <Box>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        sx={{ display: { xs: 'block', md: 'none', marginLeft: '5px' } }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            </Toolbar>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 2, md: 2 }}>
                        <Toolbar>
                            <Box sx={{ width: '100%' }}>
                                <React.Fragment>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', textAlign: 'center' }}>
                                        <Tooltip title="Account settings">
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ ml: 2 }}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        slotProps={{
                                            paper: {
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&::before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'rig    ht', vertical: 'bottom' }}
                                    >
                                        <Link href="register" className={Styles.register}>
                                            <MenuItem onClick={handleClose} >

                                                <ListItemIcon>
                                                    <HowToRegIcon fontSize="small" />
                                                </ListItemIcon>
                                                Sign up   </MenuItem></Link>

                                        {/* <MenuItem onClick={handleClose}>
                                            <Avatar /> Profile
                                        </MenuItem> */}

                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <AddShoppingCartIcon fontSize="small" />
                                            </ListItemIcon>
                                            Cart
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <DeleteIcon fontSize="small" />
                                            </ListItemIcon>
                                            Delete Account
                                        </MenuItem>

                                    </Menu>
                                </React.Fragment>
                            </Box>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}