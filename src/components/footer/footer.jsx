import React from 'react';
import {Link} from 'react-router-dom'
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, Google, YouTube, Telegram } from '@mui/icons-material';
import  './footer.css'

const FooterSection = () => {
  return (
    <Box bgcolor="#f8f8f8" py={4} mt={10}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            &copy; 2023 LibraryNetBuilder Bizni saytimiz orqali o'z kutubxonagizni bizni kutubxonaga ulang
          </Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <Link to="#" className='icon__link'>
            <Facebook />
            </Link>
          </IconButton>
        </Grid>
        <Grid item>
          <Link to="#" className='icon__link'>
            <Twitter />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#" className='icon__link'>
            <Instagram />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#" className='icon__link'>
            <Google />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#" className='icon__link'>
            <YouTube />
          </Link>
        </Grid>
        <Grid item>
          <Link to="#" className='icon__link'>
            <Telegram />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterSection;
