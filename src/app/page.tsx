
import { Container } from "@mui/material";
import styles from "./page.module.css";
import HomePage from "./Components/Layouts/HomePage/HomePage";
import Skills from '@/app/Components/skills/Skills'
import CvSection from '@/app/Components/CvSection/CvSection'
export default function Home() {
 

  return (
    <>
    <div className={styles.homePage}>
      <Container maxWidth="xl">
      <HomePage></HomePage>
      <Skills></Skills>
      <CvSection></CvSection>
      </Container>
    </div>
    </>
  );
}
