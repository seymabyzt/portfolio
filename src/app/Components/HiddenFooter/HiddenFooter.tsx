"use client"
import styles from "./HiddenFooter.module.css";
import { useTranslations } from 'next-intl';
import { Button, Container } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from "react";

export default function HiddenFooter() {
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
               <Link className={styles.footerIconBy} target='blank' href="https://www.linkedin.com/in/seyma-bayezit-009509170/"><LinkedInIcon></LinkedInIcon></Link>
              <Link className={styles.footerIconBy}  target='blank' href="https://github.com/seymabyzt"> <GitHubIcon></GitHubIcon></Link>
               <Link className={styles.footerIconBy}  target="blank" href="https://t.me/Seymazt">   <TelegramIcon></TelegramIcon> </Link>
              <Link className={styles.footerIconBy}  target="blank" href="https://wa.me/905525279096"> <WhatsAppIcon></WhatsAppIcon></Link>
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
