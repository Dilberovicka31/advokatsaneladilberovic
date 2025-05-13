// src/components/Header.jsx

// src/components/Hero.jsx
import { Box, Typography } from '@mui/material';
import heroImage from '../assets/hero2.jpg';

export default function Hero() {
  return (
    <Box
      id="hero" sx={{ scrollMarginTop: '140px', mt: 0, pt: 0, position: 'relative', zIndex: -1, pointerEvents: 'none',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
      }}
    >
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
      <Box sx={{ position: 'relative', zIndex: 2, pointerEvents: 'auto' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: '-1px',
            color: 'primary.main',
            textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            px: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 2 },
            fontFamily: 'Inter, serif'
          }}
        >
          <span>Advokat</span>
          <span>Sanela Dilberović</span>
        </Typography>
      </Box>
    </Box>
  );
}
