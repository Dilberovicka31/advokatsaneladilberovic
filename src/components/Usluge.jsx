// src/components/Usluge.jsx
import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
  Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const services = [
  { title: 'Porodično pravo', description: 'Detaljne informacije o porodičnom pravu i kako vam možemo pomoći u porodičnim slučajevima.' },
  { title: 'Nasljedno pravo', description: 'Informacije o nasljednim postupcima, testamentima i ostavinskoj raspravi.' },
  { title: 'Radno pravo', description: 'Savjeti i zastupanje u slučajevima radnih odnosa i prava radnika i poslodavaca.' },
  { title: 'Ugovorno pravo', description: 'Pomoć u izradi, provjeri i zaštiti ugovora.' },
  { title: 'Zastupanje na sudu', description: 'Zastupanje klijenata pred sudovima i drugim institucijama.' },
  { title: 'Krivično pravo', description: 'Odbrana u krivičnim postupcima i savjetovanje u vezi s krivičnim pravom.' },
  { title: 'Oblast upravnog prava', description: 'Rješavanje upravnih postupaka i sporova.' },
  { title: 'Privredno pravo', description: 'Pravna podrška za preduzeća i privredne subjekte.' },
  { title: 'Medijacija i pregovori', description: 'Pomoć u mirnom rješavanju sporova putem medijacije.' },
  { title: 'Savjetovanje o pravima klijenata', description: 'Opšte pravno savjetovanje i zaštita interesa klijenata.' },
];

export default function Usluge() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const theme = useTheme();

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box id="usluge" sx={{ py: 12, scrollMarginTop: '140px', backgroundColor: '#fff' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            color: '#2e003e',
            mb: 6,
            fontFamily: 'Inter, serif',
            fontWeight: 700,
            borderBottom: '3px solid #d4af37',
            display: 'inline-block',
            pb: 1,
          }}
        >
          Usluge
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',      // mobile: one column
              sm: '1fr',      // small screens: still one column
              md: '1fr 1fr'   // medium and up: two columns
            },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              component="div"
              onClick={() => handleOpen(service)}
              sx={{
                p: 3,
                backgroundColor: '#f8f6f3',
                color: '#2e003e',
                fontFamily: 'Inter, serif',
                borderLeft: '4px solid #d4af37',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#f1eee9',
                },
              }}
            >
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                {service.title}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Modal for description */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={400}
        >
          <Box
            sx={{
              backgroundColor: '#f8f6f3',
              p: { xs: 3, sm: 4 },
              borderLeft: '4px solid #d4af37',
              fontFamily: 'Inter, serif',
              color: '#2e003e',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {selectedService?.title}
              </Typography>
              <IconButton onClick={handleClose} sx={{ color: '#d4af37' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography sx={{ mt: 2, fontSize: '1rem', color: '#333' }}>
              {selectedService?.description}
            </Typography>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
