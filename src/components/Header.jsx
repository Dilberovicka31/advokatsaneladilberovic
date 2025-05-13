// src/components/Header.jsx
import {
  AppBar, Toolbar, IconButton, Drawer, Box, Button, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import scaleIcon from '../assets/logo.png';

const navItems = [
  { label: 'O nama', href: '#advokat' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'none',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 1,
            minHeight: 'unset',
            backgroundColor: 'transparent'
          }}
        >
          {/* Logo */}
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={scaleIcon}
              alt="Logo"
              sx={{
                height: { xs: 100, md: 140 },
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Center Nav or Hamburger */}
          {isMobile ? (
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navItems.map(({ label, href }) => (
                  <Button
                    key={label}
                    href={href}
                    sx={{
                      color: scrolled ? '#2e003e' : theme.palette.primary.main,
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      fontFamily: 'Inter, serif',
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
              <Box sx={{
  border: `2px solid ${scrolled ? '#d4af37' : theme.palette.primary.main}`,
                  px: 2.5,
                  py: 1,
                  borderRadius: 1,
                  color: scrolled ? '#2e003e' : theme.palette.primary.main,
                  fontWeight: 700,
                  fontFamily: 'Inter, serif',
                  fontSize: '1rem',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  ml: 3,
                }}
              >
                (387) 62 600 274
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ height: 0, mt: 0, backgroundColor: 'transparent' }} />

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: 'transparent',
            height: '100%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} style={{ scrollMarginTop: '140px' }} 
              onClick={() => setOpen(false)}
              sx={{
                textDecoration: 'none',
                fontFamily: 'Inter, serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
            >
              {label}
            </a>
          ))}
          <Box
            sx={{
              mt: 4,
              fontSize: '1rem',
              fontWeight: 700,
              borderTop: `1px solid ${theme.palette.primary.main}`,
              pt: 2,
              color: theme.palette.primary.main,
              textAlign: 'center',
            }}
          >
            (387) 62 600 274
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
