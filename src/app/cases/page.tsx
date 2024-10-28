import { Container } from "@mui/material"
import Projects from "../Components/projects/Projects"
import styles from "@/app/cases/cases.module.css"
const page = () => {
    return (
        <>
        <div className={styles.casesPage}>
        <Container maxWidth={false}
          sx={{
            width: '100%',
            maxWidth: '100vw',
            padding: '0 16px',
          }}>
            <Projects data={[]}></Projects>
        </Container>
        </div>
        </>
    )
}
export default page