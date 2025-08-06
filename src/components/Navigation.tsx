import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Group, 
  Stack, 
  Button, 
  Text, 
  Box, 
  Burger, 
  Drawer,
  Anchor,
  Container
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Box 
      component="nav"
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid var(--mantine-color-gray-2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: 'var(--mantine-shadow-sm)'
      }}
    >
      <Container size="xl">
        <Group justify="space-between" align="center" h={96} py="md">
          {/* Logo and Tagline */}
          <Group gap="md">
            <Anchor component={Link} to="/" onClick={closeMobileMenu}>
              <img
                src="/images/andrew-jay-logo.svg"
                alt="Andrew Jay AI Consulting"
                style={{ height: 48, width: 'auto' }}
              />
            </Anchor>
            <Text 
              size="sm" 
              c="gray.6" 
              fw={500} 
              className="desktop-tagline"
              style={{ whiteSpace: 'nowrap' }}
            >
              Smarter Systems for Growing Teams
            </Text>
          </Group>

          {/* Desktop Navigation */}
          <Box className="desktop-nav">
            <Group gap="lg">
              {navItems.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  to={item.href}
                  size="sm"
                  fw={500}
                  c={location.pathname === item.href ? 'deepBlue' : 'gray.6'}
                  style={{
                    padding: '8px 12px',
                    borderBottom: location.pathname === item.href ? '2px solid var(--mantine-color-deepBlue-6)' : 'none',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'var(--mantine-color-deepBlue-6)'
                    }
                  }}
                >
                  {item.label}
                </Anchor>
              ))}
              <Button
                component="a"
                href="https://calendly.com/andrewjay"
                target="_blank"
                rel="noopener noreferrer"
                color="softOrange"
                size="sm"
                style={{ marginLeft: 16 }}
              >
                Book a Call
              </Button>
            </Group>
          </Box>

          {/* Mobile menu button */}
          <Box className="mobile-nav-button">
            <Burger
              opened={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </Box>
        </Group>

        {/* Mobile Navigation */}
        <Box className="mobile-nav-button">
          <Drawer
            opened={isMobileMenuOpen}
            onClose={closeMobileMenu}
            position="top"
            size="100%"
            withCloseButton={false}
            styles={{
              body: {
                padding: 0
              }
            }}
          >
            <Box p="md">
              <Group justify="space-between" align="center" mb="lg">
                <Anchor component={Link} to="/" onClick={closeMobileMenu}>
                  <img
                    src="/images/andrew-jay-logo.svg"
                    alt="Andrew Jay AI Consulting"
                    style={{ height: 40, width: 'auto' }}
                  />
                </Anchor>
                <Button
                  variant="subtle"
                  size="sm"
                  onClick={closeMobileMenu}
                  leftSection={<IconX size={16} />}
                >
                  Close
                </Button>
              </Group>
              
              <Stack gap="xs" mt="xl">
                {navItems.map((item) => (
                  <Anchor
                    key={item.href}
                    component={Link}
                    to={item.href}
                    onClick={closeMobileMenu}
                    size="lg"
                    fw={500}
                    c={location.pathname === item.href ? 'deepBlue' : 'gray.6'}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--mantine-radius-md)',
                      backgroundColor: location.pathname === item.href ? 'var(--mantine-color-blue-0)' : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'var(--mantine-color-gray-0)',
                        color: 'var(--mantine-color-deepBlue-6)'
                      }
                    }}
                  >
                    {item.label}
                  </Anchor>
                ))}
                <Button
                  component="a"
                  href="https://calendly.com/andrewjay"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="softOrange"
                  size="lg"
                  fullWidth
                  onClick={closeMobileMenu}
                  mt="md"
                >
                  Book a Call
                </Button>
              </Stack>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation; 