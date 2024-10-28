import styles from '@/app/Components/loader/loader.module.css'
import { Container } from '@mui/material'

export default function Loader() {
    return (
        <>
        <Container maxWidth="xl">
            <div className={styles.loaderPage}>
            <div className={styles.newtonsCradle}>
                <div className={styles.newtonsCradleDot} ></div>
                <div className={styles.newtonsCradleDot}></div>
                <div className={styles.newtonsCradleDot}></div>
                <div className={styles.newtonsCradleDot}></div>
                </div>
            </div>
            </Container>
        </>

    )
}