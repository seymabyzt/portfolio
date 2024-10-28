"use client"
import styles from "./Footer.module.css";
import { useTranslations } from 'next-intl';
import { Button, Container } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations('Footer');
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent);
      setIsSafari(isSafariBrowser);
    }
  }, []);

  return (
    <>
      <footer className={isSafari ? styles.footerSafari : styles.footer}>
        <Container maxWidth={false}
          sx={{
            width: '100%',
            maxWidth: '100vw',
            padding: '0 16px',
          }}>
          <div className={isSafari ? styles.footerContentTopSafari : styles.footerContentTop}>
            <div className={styles.footerContentTopLeft}>
              <Link href="/" passHref className={styles.logo}>
                Seyma Bayezit
              </Link>
              <div className={styles.footerIcon}>
                <LinkedInIcon></LinkedInIcon>
                <GitHubIcon></GitHubIcon>
                <TelegramIcon></TelegramIcon>
                <WhatsAppIcon></WhatsAppIcon>
              </div>
            </div>
            <div className={styles.footerContentTopRight}>
              <Link className={styles.link} href="/" passHref>{t('home')}</Link>
              <Link className={styles.link}  href="/cases" passHref>{t('cases')}</Link>
              </div>
          </div>
          <div className={styles.footerContentBottom}>
            <p className={styles.bottomText}>{t('finish')}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
