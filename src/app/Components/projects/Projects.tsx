import styles from '@/app/Components/projects/Projects.module.css'
import { Container} from '@mui/material'
import Image from 'next/image'
import weather from '@/app/public/assets/weather.jpeg';


export default function Projects() {


  return (
    <>
      <div className={styles.projectsBackground}>
        <Container maxWidth="xl">
          <h1 className={styles.title}>My Finish</h1>
          <div className={styles.title}>
            Projects
          </div>
          <div>
            <div className={styles.projects}>
              <div className={styles.projectsContent}>
                <div>
                  <Image alt='weather' className={styles.projectsImg
} src={weather}></Image>
                </div>
                <div>
                  <h2>title</h2>
                  <h5>subtitle</h5>
                  <p>describe</p>
                </div>
              </div>
              <div className={styles.projectsContent}>
                <div>
                  <Image alt='weather' className={styles.projectsImg
} src={weather}></Image>
                </div>
                <div>
                  <h2>title</h2>
                  <h5>subtitle</h5>
                  <p>describe</p>
                </div>
                
              </div>
              <div className={styles.projectsContent}>
                deneme
              </div>
              <div className={styles.projectsContent}>
                deneme
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
    img: '/assets/weather.jpeg',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: '/weather.jpeg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];