import { Box, Grid, Typography } from '@mui/material';
import styles from './Slider.module.css'

export interface Category {
  id: number;
  title: string;
  image: string;
}
interface SliderProps {
  data: Category[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: 'white', height: 330 }}>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 3 }}>
        {data?.map((category) => (
          <Box key={category.id}>
            <Grid item className={styles.animation}
            >
              <Typography
                sx={{
                  color: 'white',
                  position: 'absolute',
                  zIndex: 10,
                  marginLeft: 2,
                  marginTop: 2,
                }}
              >
                {category.title}
              </Typography>
             
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
