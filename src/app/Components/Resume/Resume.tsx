import styles from '@/app/Components/Resume/Resume.module.css'
import Button from '../Atoms/Button/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Resume() {
    const t = useTranslations('Resume')
    return (
        <>
            <section className={styles.cvSection}>
                <div className={styles.cta}>
                    <div className={styles.bgOverlayGradiant}></div>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <h1 className={styles.title}>{t('title')}</h1>
                        </div>
                        <div className={styles.textContentRight}>
                            <div className={styles.button}>
                                <Link target='blank' href='https://www.seymabayezit.com/SeymaBayezitCV.pdf'>
                                <Button>{t('button')}</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
