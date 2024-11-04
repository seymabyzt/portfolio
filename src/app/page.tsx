
import { Container } from "@mui/material";
import styles from "./page.module.css";
import HomePage from "./Components/Layouts/HomePage/HomePage";
//import Skills from '@/app/Components/skills/Skills'
import Resume from '@/app/Components/Resume/Resume'
import Slider from "./Components/slider/Slider";
import { Category } from "./interfaces/interfaces";
import { getData } from "@/services/service";


export default async function Home() {
  let data: Category[] = await getData()
  return (
    <>
      <div className={styles.homePage}>
        <Container maxWidth={false}
          sx={{
            width: '100%',
            maxWidth: '100vw',
            padding: '0 16px',
          }}>
          <HomePage data={data}></HomePage>
          {/* <Skills></Skills> */}
          <Resume></Resume>
        </Container>
      </div>
    </>
  );
}
