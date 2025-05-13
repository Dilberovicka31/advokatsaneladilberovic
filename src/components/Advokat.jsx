// src/components/Advokat.jsx
import { Box, Typography, Container } from '@mui/material';
import profileImage from '../assets/advokat.jpeg';

export default function Advokat() {
  return (
    <Box id="advokat" sx={{ py: 10, backgroundColor: '#ffffff' }}>
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
          <Box
            sx={{
              width: 300,
              height: 400,
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              border: '1px solid #d4af37',
              flexShrink: 0,
              borderRadius: 2,
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
              Sanela Dilberović je iskusna advokatica sa više od 10 godina iskustva u različitim oblastima prava.
              Specijalizovana za porodično i ugovorno pravo, posvećena je pružanju stručne i pouzdane pravne pomoći.
              Njena misija je da klijentima pruži jasnoću, sigurnost i pravnu zaštitu na svakom koraku.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
