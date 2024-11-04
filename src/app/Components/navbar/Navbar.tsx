"use client"
import React, { useState } from 'react';
import { Toolbar, IconButton, Typography, Menu, MenuItem, Button, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styles from '@/app/Components/navbar/Navbar.module.css'
import { useLocale, useTranslations } from 'next-intl';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ThemeButton from '../Atoms/ThemeButton/ThemeButton';
import LangButton from '../Molecules/langButton/langButton';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const locale = useLocale();

  const t = useTranslations('Navbar');

  return (
    <div className={styles.navbar}>
      <Container maxWidth={false}
        sx={{
          width: '100%',
          maxWidth: '100vw',
          padding: '0 16px',
        }}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref className={styles.logo}>
              Seyma Bayezit
            </Link>
          </Typography>
          <div className={styles.icons}>
            <Link target="blank" href="https://t.me/Seymazt"> <TelegramIcon className={styles.button} /></Link>
           <Link target="blank" href="https://wa.me/905525279096"> <WhatsAppIcon className={styles.button} /></Link>
            <ThemeButton></ThemeButton>
            <LangButton defaultValue={locale}
      items={[
        {
          value: 'en',
          label: 'en'
        },
        {
          value: 'tr',
          label: 'tr'
        }
      ]}></LangButton>
          </div>
          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <div className={styles.links}>
              <Link className={styles.link} href="/" passHref>{t('home')}</Link>
              <Link className={styles.link}  href="/cases" passHref>{t('cases')}</Link>
              </div>
          </Box>
       
          {/* Mobile Menu Button */}
          <Box sx={{
            display: { xs: 'block', md: 'none' },
          }}>
            <IconButton
              size="large"
              edge="start"
              className={styles.menuButton}
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
      </Container>
    </div>
  );
}
