import { Box, Typography } from '@mui/material';
import heroImage from '../assets/hero2.jpg';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        scrollMarginTop: '140px',
        mt: 0,
        pt: 0,
        position: 'relative',
        zIndex: -1,
        pointerEvents: 'none',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.25)',
          zIndex: 1,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          pointerEvents: 'auto',
          px: 3,
          py: 4,
          borderRadius: 4,
          backgroundColor: 'rgba(10, 10, 10, 0.5)',
          maxWidth: '90%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: '-1px',
            color: 'primary.main',
            textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            fontFamily: 'Inter, serif',
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          }}
        >
          Advokat Sanela Dilberović
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'white',
            fontFamily: 'Inter, serif',
            fontSize: { xs: '1rem', md: '1.25rem' },
            textShadow: '0 1px 3px rgba(0,0,0,0.6)',
          }}
        >
          Možete nas pronaći u Mostaru – Kalajdžića 2, ili nas kontaktirati putem forme ispod.
        </Typography>
      </Box>
    </Box>
  );
}
