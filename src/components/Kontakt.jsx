import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const { name, email, phone, message } = form.current;

    if (!name.value.trim()) {
      alert('Unesite svoje ime i prezime.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
      alert('Unesite ispravnu email adresu.');
      return;
    }

    if (!phone.value || !/^[0-9+\s()-]{6,}$/.test(phone.value)) {
      alert('Unesite ispravan broj telefona.');
      return;
    }

    if (!message.value.trim()) {
      alert('Unesite poruku.');
      return;
    }

    emailjs
      .sendForm('service_twnfxon', 'template_n5v37sb', form.current, 'U6d2OxY3jUfKRipED')
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
      });
  };

  const fieldStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f8f6f3',
      borderRadius: 1,
      color: '#2e003e',
      '&.Mui-focused': {
        backgroundColor: '#f8f6f3',
      },
      '& input': {
        color: '#2e003e',
      },
      '& textarea': {
        color: '#2e003e',
      },
      '&:-webkit-autofill': {
        boxShadow: '0 0 0 1000px #f8f6f3 inset',
        WebkitTextFillColor: '#2e003e',
        caretColor: '#2e003e',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2e003e',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2e003e',
    },
  };

  return (
    <Box id="kontakt" sx={{ py: 10, scrollMarginTop: '140px', backgroundColor: '#fff' }}>
      <Container maxWidth="sm">
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

        <form ref={form} onSubmit={sendEmail}>
          <Stack spacing={3}>
            <TextField
              name="name"
              label="Ime i prezime"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyles}
              slotProps={{
                input: {
                  onInvalid: (e) => e.target.setCustomValidity('Unesite svoje ime i prezime'),
                  onInput: (e) => e.target.setCustomValidity(''),
                },
              }}
            />
            <TextField
              name="email"
              label="Email adresa"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyles}
              slotProps={{
                input: {
                  onInvalid: (e) => e.target.setCustomValidity('Unesite ispravnu email adresu'),
                  onInput: (e) => e.target.setCustomValidity(''),
                },
              }}
            />
            <TextField
              name="phone"
              label="Broj telefona"
              variant="outlined"
              fullWidth
              required
              sx={fieldStyles}
              slotProps={{
                input: {
                  onInvalid: (e) => e.target.setCustomValidity('Unesite ispravan broj telefona'),
                  onInput: (e) => e.target.setCustomValidity(''),
                },
              }}
            />
            <TextField
              name="message"
              label="Poruka"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              sx={fieldStyles}
              slotProps={{
                textarea: {
                  onInvalid: (e) => e.target.setCustomValidity('Unesite poruku'),
                  onInput: (e) => e.target.setCustomValidity(''),
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
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
            {success && (
              <Typography color="success.main" textAlign="center">
                Poruka je poslana!
              </Typography>
            )}
            {error && (
              <Typography color="error" textAlign="center">
                Greška! Pokušajte ponovo.
              </Typography>
            )}
          </Stack>
        </form>
      </Container>
 


      {/* MAP & INFO SECTION (PRESERVED) */}
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
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        <Stack spacing={2} sx={{ mt: 5, alignItems: 'center', color: '#2e003e' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <RoomIcon sx={{ fontSize: 28, color: '#d4af37' }} />
            <Typography sx={{ fontSize: '1rem', color: '#2e003e'}}>
              Kalajdžića 2, Mostar 88 104
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PhoneIcon sx={{ fontSize: 28, color: '#d4af37' }} />
            <Typography sx={{ fontSize: '1rem', color: '#2e003e' }}>
              +387 62 600 274
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AccessTimeIcon sx={{ fontSize: 28, color: '#d4af37' }} />
            <Typography sx={{ fontSize: '1rem', color: '#2e003e' }}>
              Radno vrijeme od 09:00 do 16:00
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ fontSize: 28, color: '#d4af37' }} />
            <Typography sx={{ fontSize: '1rem', color: '#2e003e' }}>
              advokat.dilberovic@gmail.com
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
