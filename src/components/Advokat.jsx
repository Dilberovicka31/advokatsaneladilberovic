// src/components/Advokat.jsx
import { Box, Typography, Container } from '@mui/material';
import profileImage from '../assets/advokat.jpeg';

export default function Advokat() {
  return (
    <Box id="advokat" sx={{ py: 10, scrollMarginTop: '140px',backgroundColor: '#ffffff' }}>
      <Container maxWidth="md">
        {/* Section title */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#2e003e',
              fontFamily: 'Inter, serif',
              fontWeight: 700,
              display: 'inline-block',
              borderBottom: '3px solid #d4af37',
              display: 'inline-block',
              pb: 1,
            }}
          >
            O meni
          </Typography>
        </Box>

        {/* Layout: image left, text right */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'flex-start',
          }}
        >
          {/* Profile Image */}
         {/* Profile Image */}
<Box
  sx={{
    width: { xs: 200, sm: 250, md: 300 },
    height: { xs: 270, sm: 350, md: 400 },
    backgroundImage: `url(${profileImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    border: '1px solid #d4af37',
    borderRadius: 2,
    mx: { xs: 'auto', md: 0 }, // center on mobile
    flexShrink: 0,
  }}
/>


          {/* Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: '1.25rem',
                lineHeight: 2,
                fontFamily: 'Inter, serif',
                color: '#2e003e',
                maxWidth: 600,
                textAlign: 'left',
              }}
            >
Sanela Dilberović je iskusna pravnica sa više od 20 godina rada u različitim oblastima prava, a posljednjih 5 godina aktivno obavlja funkciju advokatice.
Tokom svoje bogate karijere stekla je duboko razumijevanje pravnog sistema, kako kroz rad u institucijama, tako i kroz direktan rad s klijentima.
Specijalizovala se za porodično i ugovorno pravo, gdje je posebno posvećena zaštiti prava i interesa svojih klijenata, pružajući im jasne, precizne i pouzdane pravne savjete.

Sanela je poznata po svom predanom i profesionalnom pristupu, ali i po toplom i ljudskom odnosu prema svakome ko joj se obrati za pomoć.
Njena misija je da svaki klijent osjeti sigurnost, razumije pravni proces i ima pravog zastupnika na svojoj strani – od prvog savjeta pa sve do konačnog rješenja.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
