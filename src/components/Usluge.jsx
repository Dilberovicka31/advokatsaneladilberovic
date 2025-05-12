// src/components/Usluge.jsx
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const services = [
  'Porodično pravo',
  'Nasljedno pravo',
  'Radno pravo',
  'Ugovorno pravo',
  'Zastupanje na sudu',
];

export default function Usluge() {
  return (
    <Box id="usluge" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 4 }}>
          Usluge
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service}>
              <Paper sx={{ p: 3, backgroundColor: 'background.paper', color: 'text.primary' }} elevation={2}>
                <Typography>{service}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
