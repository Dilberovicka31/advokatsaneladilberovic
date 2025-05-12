// src/components/Kontakt.jsx
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';

export default function Kontakt() {
  return (
    <Box id="kontakt" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" sx={{ color: 'primary.main', mb: 4, fontFamily: "'Playfair Display', serif" }}>
          Kontakt
        </Typography>
        <Stack spacing={3}>
          <TextField label="Ime i prezime" variant="outlined" fullWidth />
          <TextField label="Email adresa" variant="outlined" fullWidth />
          <TextField label="Poruka" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary">Pošalji</Button>
        </Stack>
      </Container>
    </Box>
  );
}
