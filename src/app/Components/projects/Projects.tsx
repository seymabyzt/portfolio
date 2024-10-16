import styles from '@/app/Components/projects/Projects.module.css'
import { Button, Container } from '@mui/material'
import Image from 'next/image'
import weather from '@/app/public/assets/weather.jpeg';


export default function Projects() {


  return (
    <>
      <div className={styles.projectsBackground}>
        <Container maxWidth="xl">
          <div className={styles.projectArea}>
            <h1 className={styles.title}>My Finish</h1>
            <div className={styles.title}>
              Projects
            </div>
            <div>
              <div className={styles.projects}>
                {itemData.map((item, index) => (
                  <div key={index} className={styles.projectsContent}>
                    <div className={styles.projectsContentTop}>
                      <Image alt='weather' width={600} className={styles.projectsImg
                      } src={item.img} ></Image>
                    </div>
                    <div className={styles.projectsContentBottom}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <button className={styles.viewButton}>
                        <span>View case</span>
                        <svg className={styles.arrow} viewBox="0 0 24 24">
                          <path d="M10.7186 17.7593L4.83753 11.8782L3.46777 13.248L11.6873 21.4675L12.3722 20.7826L19.9068 13.248L18.537 11.8782L12.656 17.7593L12.656 2.09326H10.7186L10.7186 17.7593Z"></path>
                          <path d="M10.7186 17.7593L4.83753 11.8782L3.46777 13.248L11.6873 21.4675L12.3722 20.7826L19.9068 13.248L18.537 11.8782L12.656 17.7593L12.656 2.09326H10.7186L10.7186 17.7593Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
const itemData = [
  {
    img: weather,
    title: 'Weather App',
    description: 'This app made for learn weather api',
  },
  {
    img: weather,
    title: 'Burger',
    description: '@rollelflex_graphy726',
  },
  {
    img: weather,
    title: 'Weather App',
    description: 'This app made for learn weather api',
  },
  {
    img: weather,
    title: 'Burger',
    description: '@rollelflex_graphy726',
  },

];