import styles from '@/app/Components/Layouts/HomePage/HomePage.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';


export default function HomePage(){
  const t = useTranslations('HomePage');
  
    return(
        <>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
              <h1 className={styles.pageTitle}>{t('title')}</h1>
              <h3 className={styles.pageSubTitle}>{t('subTitle')}</h3>
          </div>
          <div className={styles.homeContentRight}>
            <div className={styles.homeContentRightStart}>
             <img className={styles.phone} 
             width={200} 
             height={220} 
             alt="phone"
             src="https://www.seymabayezit.com/assets/phone.gif">
             </img>
             <img src="https://www.seymabayezit.com/assets/laptop.png"
             width={350} 
             height={350} 
             alt='laptop'></img>
            </div>
          <div className={styles.homeContentRightEnd}>
            <ul className={styles.homeContentRightSide}>
              <li>
              {t('design')}
              </li>
              <li>
              {t('cleanCode')}
              </li>
              <li>
              {t('responsive')}</li>
              <li>
              {t('versionControl')}</li>
              <li>
              {t('userExperience')}</li>
              <li>
              {t('webAplications')}</li>
              <li>
              {t('apiEntegration')}</li>
            </ul>
            </div>
          </div>
        </div>
        </>
    )
}