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
  <Box sx={{background: '#4d5f', height: '300px', borderRadius: '2.5rem'}}>2</Box>
  </Grid2>
  <Grid2 size={6}>
    <Box sx={{background: '#4d5f', height: '300px', borderRadius: '2.5rem'}}>2</Box>
  </Grid2>
  <Grid2 size={6}>
  <Box sx={{background: '#4d5f', height: '300px', borderRadius: '2.5rem'}}>2</Box>
  </Grid2>
  <Grid2 size={6}>
  <Box sx={{background: '#4d5f', height: '300px', borderRadius: '2.5rem'}}>2</Box>
  </Grid2>
</Grid2>
     
        </Container>
        </div>
        </>
    )
}