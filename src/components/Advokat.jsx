// src/components/Advokat.jsx
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import profileImage from '../assets/advokat.jpeg'; // Replace with your image path

export default function Advokat() {
  return (
    <Box id="o-meni" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            mb: 4,
            fontFamily: "'Lora', serif",
          }}
        >
          O MENI
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Sanela Dilberović"
              src={profileImage}
              sx={{
                width: 300,
                height: 300,
                mx: 'auto',
                border: '3px solid #D4AF37',
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                color: 'text.primary',
                lineHeight: 1.8,
                fontSize: '1.2rem',
                fontFamily: "'Lora', serif",
              }}
            >
              Sanela Dilberović je iskusna advokatica sa više od 10 godina iskustva u različitim oblastima prava.
              Specijalizovana za porodično i ugovorno pravo, posvećena je pružanju stručne i pouzdane pravne pomoći.
              Njena misija je da klijentima pruži jasnoću, sigurnost i pravnu zaštitu na svakom koraku.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
