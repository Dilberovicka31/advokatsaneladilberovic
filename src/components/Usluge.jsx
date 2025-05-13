import { Box, Typography, Container, Paper, Grid } from '@mui/material';

const services = [
  'Porodično pravo',
  'Nasljedno pravo',
  'Radno pravo',
  'Ugovorno pravo',
  'Zastupanje na sudu',
  'Krivično pravo',
  'Oblast upravnog prava',
  'Privredno pravo',
  'Medijacija i pregovori',
  'Savjetovanje o pravima klijenata',
];

export default function Usluge() {
  return (
    <Box id="usluge" sx={{ py: 12, scrollMarginTop: '140px', backgroundColor: '#ffffff' }}>
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: '#2e003e',
            mb: 6,
            fontFamily: 'Inter, serif',
            fontWeight: 700,
            borderBottom: '3px solid #d4af37',
            display: 'inline-block',
            pb: 1,
          }}
        >
          Usluge
        </Typography>

        {/* Responsive layout with two columns on md+ screens, full width on mobile */}
        <Grid
          container
          spacing={3}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={5.5}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  p: 3,
                  backgroundColor: '#f8f6f3',
                  color: '#2e003e',
                  fontFamily: 'Inter, serif',
                  borderLeft: '4px solid #d4af37',
                }}
              >
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  {service}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
