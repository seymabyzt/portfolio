import { Container } from "@mui/material"
import Projects from "../Components/projects/Projects"
import styles from "@/app/cases/cases.module.css"
const page = () => {
    return (
        <>
        <div className={styles.casesPage}>
        <Container maxWidth="xl">
            <Projects></Projects>
        </Container>
        </div>
        </>
    )
}
export default page