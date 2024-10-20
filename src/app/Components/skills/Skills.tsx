import Image from "next/image";
import styles from '@/app/Components/skills/Skills.module.css'
import react from '@/app/public/assets/1.svg'
import nextjs from '@/app/public/assets/3.svg'
import javascript from '@/app/public/assets/5.svg'
import nodejs from '@/app/public/assets/6.svg'
import bootstrap from '@/app/public/assets/2.svg'
import sass from '@/app/public/assets/4.svg'

export default function Brand() {

    return(
        <>
        <div className={styles.skillsSection}>
            <h4>Skilss</h4>
            <Image className={styles.skills}  width={70} alt='react' src={react}></Image>
            <Image  className={styles.skills}  width={70}  alt='next.js' src={nextjs}></Image>
            <Image  className={styles.skills}  width={70}  alt='javascript' src={javascript}></Image>
            <Image  className={styles.skills}  width={70}  alt='nodejs' src={nodejs}></Image>
            <Image  className={styles.skills}  width={70}  alt='bootstrap' src={bootstrap}></Image>
            <Image  className={styles.skills}  width={70}  alt='sass' src={sass}></Image>
        </div>
        </>
    )
}