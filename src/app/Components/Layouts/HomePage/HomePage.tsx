import styles from '@/app/Components/Layouts/HomePage/HomePage.module.css'
export default function HomePage(){
    return(
        <>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
              <h1 className={styles.pageTitle}> We Create Sites</h1>
          </div>
          <div className={styles.homeContentRight}>
            <div className={styles.homeContentRightStart}>
              Video
            </div>
          <div className={styles.homeContentRightEnd}>
            <ul className={styles.homeContentRightSide}>
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
            </div>
          </div>
        </div>
        </>
    )
}