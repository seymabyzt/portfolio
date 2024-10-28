
import { Container } from "@mui/material";
import styles from "./page.module.css";
import HomePage from "./Components/Layouts/HomePage/HomePage";
//import Skills from '@/app/Components/skills/Skills'
import Resume from '@/app/Components/Resume/Resume'


export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <Container maxWidth={false}
          sx={{
            width: '100%',
            maxWidth: '100vw',
            padding: '0 16px',
          }}>
          <HomePage></HomePage>
          {/* <Skills></Skills> */}
          <Resume></Resume>
        </Container>
      </div>
    </>
  );
}
