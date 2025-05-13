import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

export default function Kontakt() {
  return (
    <Box id="kontakt" sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container maxWidth="sm">
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            color: '#12081e',
            mb: 6,
            fontFamily: "'Inter', serif",
            fontWeight: 700,
            borderBottom: '3px solid #d4af37',
            display: 'inline-block',
            pb: 1,
          }}
        >
          Kontakt
        </Typography>

        {/* Contact Form */}
        <Stack spacing={3}>
          <TextField
            label="Ime i prezime"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f8f6f3',
                borderRadius: 1,
              },
            }}
          />
          <TextField
            label="Email adresa"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f8f6f3',
                borderRadius: 1,
              },
            }}
          />
          <TextField
            label="Broj telefona"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f8f6f3',
                borderRadius: 1,
              },
            }}
          />
          <TextField
            label="Poruka"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f8f6f3',
                borderRadius: 1,
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#D4AF37',
                color: '#000',
                fontWeight: 600,
                px: 5,
                '&:hover': { backgroundColor: '#c19c2c' },
              }}
            >
              POŠALJI
            </Button>
          </Box>
        </Stack>
      </Container>

      {/* Map */}
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Box
          component="section"
          aria-label="Mapa lokacije"
          sx={{ borderRadius: 2, overflow: 'hidden' }}
        >
          <iframe
            title="Advokat Sanela Dilberović Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.146379151259!2d17.8068864758817!3d43.3435693724023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b43b02e5baf09%3A0x3f2d7ee8b1edb670!2sAdvokat%20Sanela%20Dilberovi%C4%87!5e1!3m2!1sen!2sus!4v1747095420066!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        {/* Info Centered Below Map */}
        <Stack spacing={2} sx={{ mt: 5, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <RoomIcon sx={{ fontSize: 28, color: '#333' }} />
            <Typography sx={{ fontSize: '1rem', color: '#333' }}>
              Kalajdžića 2, Mostar 88 104
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PhoneIcon sx={{ fontSize: 28, color: '#333' }} />
            <Typography sx={{ fontSize: '1rem', color: '#333' }}>
              +387 62 600 274
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AccessTimeIcon sx={{ fontSize: 28, color: '#333' }} />
            <Typography sx={{ fontSize: '1rem', color: '#333' }}>
              Radno vrijeme od 09:00 do 16:00
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ fontSize: 28, color: '#333' }} />
            <Typography sx={{ fontSize: '1rem', color: '#333' }}>
              advokat@advokat.ba
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
