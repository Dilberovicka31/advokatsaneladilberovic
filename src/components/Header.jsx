// src/components/Header.jsx
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText,
  Box, useMediaQuery, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import scaleIcon from '../assets/logo.png';

const navItems = [
  { label: 'O meni', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Advokat', href: '#advokat' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          <Box component="a" href="#o-nama" sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
            <img src={scaleIcon} alt="Logo" style={{ height: 200, objectFit: 'contain' }} />
          </Box>
          <Box sx={{ width: 120 }} />
          {isMobile ? (
            <IconButton onClick={() => setOpen(true)} sx={{ color: theme.palette.primary.main }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
              {navItems.map(({ label, href }) => (
                <Button
                  key={label}
                  href={href}
                  sx={{
                    color: scrolled ? '#2e003e' : theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    textTransform: 'none',
                    fontFamily: 'Inter, serif'
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, backgroundColor: theme.palette.background.paper, height: '100%' }}>
          <List>
            {navItems.map(({ label, href }) => (
              <ListItem button key={label} component="a" href={href} onClick={() => setOpen(false)}>
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{
                    sx: {
                      color: theme.palette.primary.main,
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      fontFamily: 'Inter, serif',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
