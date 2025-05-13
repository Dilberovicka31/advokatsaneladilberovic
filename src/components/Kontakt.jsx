// src/components/Kontakt.jsx
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';

export default function Kontakt() {
  return (
    <Box id="kontakt" sx={{ py: 10, backgroundColor: '#ffffff' }}>
      <Container maxWidth="sm">
        {/* Section title */}
        <Typography
          variant="h4"
          sx={{
            color: '#2e003e',
            mb: 4,
            fontFamily: 'Inter, serif',
            fontWeight: 700,
            borderBottom: '3px solid #d4af37',
            display: 'inline-block',
            pb: 1,
          }}
        >
          Kontakt
        </Typography>

        {/* Form */}
        <Stack spacing={3}>
          <TextField
            label="Ime i prezime"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: '#f9f9f9',
                borderRadius: 1,
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#aaa' },
                '&.Mui-focused fieldset': { borderColor: '#d4af37' },
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#2e003e',
                fontFamily: 'Inter, serif',
              },
            }}
          />

          <TextField
            label="Email adresa"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: '#f9f9f9',
                borderRadius: 1,
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#aaa' },
                '&.Mui-focused fieldset': { borderColor: '#d4af37' },
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#2e003e',
                fontFamily: 'Inter, serif',
              },
            }}
          />

          <TextField
            label="Broj telefona"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: '#f9f9f9',
                borderRadius: 1,
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#aaa' },
                '&.Mui-focused fieldset': { borderColor: '#d4af37' },
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#2e003e',
                fontFamily: 'Inter, serif',
              },
            }}
          />

          <TextField
            label="Poruka"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: '#f9f9f9',
                borderRadius: 1,
                '& fieldset': { borderColor: '#ccc' },
                '&:hover fieldset': { borderColor: '#aaa' },
                '&.Mui-focused fieldset': { borderColor: '#d4af37' },
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#2e003e',
                fontFamily: 'Inter, serif',
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D4AF37',
              color: '#000',
              fontWeight: 600,
              fontFamily: 'Inter, serif',
              '&:hover': { backgroundColor: '#c19c2c' },
            }}
          >
            Pošalji
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
