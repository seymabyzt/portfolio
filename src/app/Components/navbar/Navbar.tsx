"use client"
import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styles from '@/app/Components/navbar/Navbar.module.css'
import {useTranslations} from 'next-intl';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThemeButton from '../Atoms/ThemeButton/ThemeButton';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
  };

  const t = useTranslations('Navbar');
  return (
    <div 
      className={styles.navbar}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref className={styles.button}>
            Seyma Bayezit
          </Link>
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <TelegramIcon className={styles.button}/>
          <WhatsAppIcon className={styles.button}/>
          <ThemeButton></ThemeButton>
          <Button
          className={styles.button}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        EN <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>EU</MenuItem>
      
      </Menu>

          <Button className={styles.button}>
            <Link href="/" passHref>{t('home')}</Link>
          </Button>
          <Button className={styles.button}>
            <Link href="/cases" passHref>{t('cases')}</Link>
          </Button>
       
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } ,
      }}>
          <IconButton
            size="large"
            edge="start"
            className={styles.button}
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Dropdown Menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link href="/" passHref>{t('home')}</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link href="/cases" passHref>{t('cases')}</Link>
          </MenuItem>
     
        </Menu>
      </Toolbar>
    </div>
  );
}
