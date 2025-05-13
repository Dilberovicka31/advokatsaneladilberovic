// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Usluge from './components/Usluge';
import Advokat from './components/Advokat';
import Kontakt from './components/Kontakt';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Box sx={{ mt: 0 }}>
        <Hero />
        <Advokat />
        <Usluge />
        <Kontakt />
      </Box>
    </>
  );
}

export default App;
