import styles from '@/app/Components/projects/Projects.module.css'
import { Box, Container, Grid2, Toolbar } from '@mui/material'

export default function Projects () {


    return (
        <>
        <div className={styles.projectsBackground}>
              <Container maxWidth="xl">
      
        <h1 className={styles.title}>My Finish</h1>
        <div className={styles.title}> 
           Projects
        </div>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid2 size={6}>
    <Item>1</Item>
  </Grid2>
  <Grid2 size={6}>
    <Item>2</Item>
  </Grid2>
  <Grid2 size={6}>
    <Item>3</Item>
  </Grid2>
  <Grid2 size={6}>
    <Item>4</Item>
  </Grid2>
</Grid2>
     
        </Container>
        </div>
        </>
    )
}