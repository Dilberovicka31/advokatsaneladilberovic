// src/components/Hero.jsx
import { Box, Typography } from '@mui/material';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';

export default function Hero() {
  return (
    <Box id="o-nama" sx={{ height: '100vh', display: 'flex', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ flex: 1, backgroundImage: `url(${hero1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Box sx={{ flex: 1, backgroundImage: `url(${hero2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(18,8,30,0.6)', // darker purple overlay
          textAlign: 'center',
          zIndex: 1,
        }}
      >
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
          }}
        >
          <span>Advokat</span>
          <span>Sanela Dilberović</span>
        </Typography>
      </Box>
    </Box>
  );
}
