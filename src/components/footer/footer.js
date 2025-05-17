import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Styles from './footer.module.css';
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
export default function footer() {
    return (<>

        <Box className={Styles.Footer}>
            <Container fixed spacing={2}>
                <Grid container>
                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>Info</h5>
                            <ul>
                                <li>
                                    <a href="#">Track Your Order</a>
                                </li>
                                <li>
                                    <a href="index.html">Our Blog</a>
                                </li>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Shipping</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">Community</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>About</h5>
                            <ul>
                                <li>
                                    <a href="#">History</a>
                                </li>
                                <li>
                                    <a href="#">Our Team</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Company</a>
                                </li>
                                <li>
                                    <a href="#">Manufacture</a>
                                </li>
                                <li>
                                    <a href="#">Wholesale</a>
                                </li>
                                <li>
                                    <a href="#">Retail</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>Women Shoes</h5>
                            <ul>
                                <li>
                                    <a href="#">Track Your Order</a>
                                </li>
                                <li>
                                    <a href="index.html">Our Blog</a>
                                </li>
                                <li>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">Shipping</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">Community</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid size={2}>
                        <Box className={Styles.footermenu}>
                            <h5>Popular</h5>
                            <ul>
                                <li>
                                    <a href="#">Prices Drop</a>
                                </li>
                                <li>
                                    <a href="#">New Products</a>
                                </li>
                                <li>
                                    <a href="#">Best Sales</a>
                                </li>
                                <li>
                                    <a href="index.html">Stores</a>
                                </li>
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modallogin">Login</a>
                                </li>
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modallong">Cart</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid size={3}>
                        <Box className={Styles.footermenu}>
                            <h5>Get In Touch</h5>
                            <Box>
                                <ul>
                                    <li><b>Location:</b>Kanta Chauraha, Sindhi Colony, Jhotwara, Jaipur, Rajasthan 302012</li>
                                    <li><b>Contact:</b>+91 9991303458</li>
                                    <li><b>Whatsapp:</b>+91 9991303458</li>
                                    <li><b>Email Address:</b> skmart@gmail.com</li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={12}>
                        <Box className={Styles.copyright}>
                            <p>© 2025 skmart | All Rights Reserved</p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
    )
}
