// src/components/Header.jsx
import {
  AppBar, Toolbar, IconButton, Drawer, Box, Button, useMediaQuery, Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import scaleIcon from '../assets/logo.png';

const navItems = [
  { label: 'O meni', href: '#advokat' },
  { label: 'Usluge', href: '#usluge' },
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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? '#12081e' : 'transparent',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease',
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
            backgroundColor: 'transparent',
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
              onClick={() => setOpen(prev => !prev)}
              sx={{ color: '#d4af37' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {navItems.map(({ label, href }) => (
                  <Button
                    key={label}
                    href={href}
                    sx={{
                      color: '#d4af37',
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
              <Box
                sx={{
                  border: '2px solid #d4af37',
                  px: 2.5,
                  py: 1,
                  borderRadius: 1,
                  color: '#d4af37',
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
      {isMobile && (
        <Drawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              mt: '100px',
              width: '100%',
              backgroundColor: theme.palette.background.default,
              borderTop: '2px solid #d4af37',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              pt: 4,
              alignItems: 'flex-start',
            }}
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                underline="none"
                onClick={() => setOpen(false)}
                sx={{
                  display: 'block',
                  fontFamily: 'Inter, serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#d4af37',
                  '&:hover': {
                    color: '#c19c2c',
                  },
                }}
              >
                {label}
              </Link>
            ))}

            <Box
              sx={{
                mt: 4,
                fontSize: '1.1rem',
                fontWeight: 700,
                borderTop: '1px solid #d4af37',
                pt: 2,
                color: '#d4af37',
                textAlign: 'center',
                width: '100%',
              }}
            >
              (387) 62 600 274
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
}
