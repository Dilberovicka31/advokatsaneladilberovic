// src/components/Header.jsx
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useMediaQuery,
    Button,
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import { useState } from 'react';
  import { useTheme } from '@mui/material/styles';
  import scaleIcon from '../assets/logo3.png'; // Transparent logo
  
  const navItems = [
    { label: 'O meni', href: '#o-nama' },
    { label: 'Usluge', href: '#usluge' },
    { label: 'Advokat', href: '#advokat' },
    { label: 'Kontakt', href: '#kontakt' },
  ];
  
  export default function Header() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleToggle = () => setOpen(!open);
  
    return (
      <>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              minHeight: 64,
              position: 'relative',
            }}
          >
            {/* Logo absolutely positioned */}
            <Box
              component="a"
              href="#o-nama"
              sx={{
                position: 'absolute',
                left: 0,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                pl: 2,
              }}
            >
              <img
                src={scaleIcon}
                alt="Logo"
                style={{
                  height: '100px',
                  objectFit: 'contain',
                }}
              />
            </Box>
  
            {/* Filler to prevent layout shift */}
            <Box sx={{ width: '120px' }} /> {/* Spacer for logo */}
  
            {/* Desktop Nav */}
            {isMobile ? (
              <IconButton onClick={handleToggle} sx={{ color: 'primary.main' }}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
                {navItems.map(({ label, href }) => (
                  <Button
                    key={label}
                    href={href}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      textTransform: 'none',
                      px: 3,
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
  
        {/* Mobile Drawer */}
        <Drawer anchor="right" open={open} onClose={handleToggle}>
          <Box sx={{ width: 250, backgroundColor: 'background.default', height: '100%' }}>
            <List>
              {navItems.map(({ label, href }) => (
                <ListItem button key={label} component="a" href={href} onClick={handleToggle}>
                  <ListItemText
                    primary={label}
                    slotProps={{
                      primary: {
                        sx: {
                          color: 'primary.main',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                        },
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
  