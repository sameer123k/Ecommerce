import React , {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import Person3Icon from '@mui/icons-material/Person3';
import Stack from '@mui/material/Stack';
// style 
import Styles from './header.module.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        // vertical padding + font size from searchIcon
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

export default function header() {

    function showNav() {
        console.log('jkljjsdfkljsdfjklsdlkj');
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className={Styles.header}>

                    <Grid size={{ xs: 10, md: 10 }}>
                        <Box> <Toolbar>
                            <img src={Logo} alt="logo" height={40} />
                            {/* toggle icon */}

                            <Box className='Styles.navMenus' sx={{ display: { xs: 'none', md: 'block' } }}>
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
                                    onClick={showNav} >
                                    <MenuIcon />
                                </IconButton>
                            </Box>

                        </Toolbar></Box>
                    </Grid>

                    <Grid size={{ xs: 2, md: 2 }}>

                        <Toolbar>
                            {/* profile icons  */}
                            <Box sx={{ width: '100%' }}>
                                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                                    <Box className={Styles.profileIcons}>
                                        <Person3Icon />
                                        <a href="#">Account</a>
                                    </Box>
                                </Stack>
                            </Box>

                        </Toolbar>

                    </Grid>

                </Grid>
            </Box>

        </>
    );
}
