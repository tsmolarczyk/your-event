import { Container } from '@mui/system';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Footer };
