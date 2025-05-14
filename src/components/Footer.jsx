// src/components/Footer.jsx
import { Box, Typography, Stack, Fade, useScrollTrigger, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const trigger = useScrollTrigger({ threshold: 100 });

  return (
    <Fade in={trigger} timeout={1000}>
      <Box
        component="footer"
        sx={{
          backgroundColor: '#12081e',
          color: '#fff',
          py: 6,
          mt: 10,
          px: 3,
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* LinkedIn Icon */}
          <LinkedInIcon
            sx={{ color: '#d4af37', fontSize: 32 }}
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          />

          {/* Scroll to Top Button */}
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              color: '#d4af37',
              border: '1px solid #d4af37',
              borderRadius: '20px',
              px: 3,
              fontSize: '0.85rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#d4af37',
                color: '#12081e',
              },
            }}
          >
            Povratak na vrh
          </Button>

          {/* Legal Disclaimer */}
          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              fontSize: '0.85rem',
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
              px: 2,
            }}
          >
            Napomena: Informacije dostupne na ovoj stranici služe isključivo u informativne svrhe i ne predstavljaju pravni savjet. 
            Za specifične pravne slučajeve obavezno se konsultujte sa advokatom.
          </Typography>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: '#d4af37',
              fontSize: '0.8rem',
              textAlign: 'center',
              pt: 2,
            }}
          >
            © 2025 Advokat Sanela Dilberović. Sva prava zadržana.
          </Typography>

          {/* Developer Credit */}
          <Typography
            variant="body2"
            sx={{
              color: '#888',
              fontSize: '0.75rem',
              textAlign: 'center',
              mt: 1,
            }}
          >
            Razvoj i dizajn: Mija Dilberović
          </Typography>
        </Stack>
      </Box>
    </Fade>
  );
}
