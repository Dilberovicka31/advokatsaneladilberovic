// src/App.jsx
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Advokat from './components/Advokat';
import Usluge from './components/Usluge';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Hero />
        <Advokat />
        <Usluge />
        <Kontakt />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
