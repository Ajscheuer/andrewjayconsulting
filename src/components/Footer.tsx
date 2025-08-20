import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box,
  Container,
  Grid,
  Stack,
  Group,
  Text,
  Anchor,
  Divider,
  Button
} from '@mantine/core';

const Footer: React.FC = () => {
  return (
    <Box component="footer" bg="gray.9" c="gray.1" pt="xl">
      <Container size="xl">
        <Grid gutter="xl" align="flex-start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Group gap="md">
                <img
                  src="/images/andrew-jay-logo.svg"
                  alt="Andrew Jay Consulting"
                  style={{ height: 36, width: 'auto' }}
                />
              </Group>
              <Text c="gray.3">
                Helping small businesses unlock real productivity using AI and Microsoft 365.
              </Text>
              <Group gap="md" mt="xs">
                <Button
                  component="a"
                  href="https://calendly.com/andrewjay"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="softOrange"
                  size="sm"
                >
                  Book a Call
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outline"
                  color="gray"
                  size="sm"
                >
                  Contact
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="sm">
              <Text fw={600} c="gray.2">Services</Text>
              <Stack gap={6}>
                <Anchor component={Link} to="/services" c="gray.4" size="sm">AI Meeting Summaries</Anchor>
                <Anchor component={Link} to="/services" c="gray.4" size="sm">Document Q&A Bot</Anchor>
                <Anchor component={Link} to="/services" c="gray.4" size="sm">Email Assistant</Anchor>
                <Anchor component={Link} to="/services" c="gray.4" size="sm">Power Apps</Anchor>
                <Anchor component={Link} to="/services" c="gray.4" size="sm">Power Automate</Anchor>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="sm">
              <Text fw={600} c="gray.2">Company</Text>
              <Stack gap={6}>
                <Anchor component={Link} to="/about" c="gray.4" size="sm">About</Anchor>
                <Anchor component={Link} to="/contact" c="gray.4" size="sm">Contact</Anchor>
                <Anchor href="https://calendly.com/andrewjay" target="_blank" rel="noopener noreferrer" c="gray.4" size="sm">Book a Call</Anchor>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color="gray.7" />

        <Group justify="space-between" align="center" py="md">
          <Text size="sm" c="gray.5">&copy; {new Date().getFullYear()} Andrew Jay Consulting. All rights reserved.</Text>
          <Group gap="md">
            <Anchor href="/" component={Link} to="/" c="gray.4" size="sm">
              Home
            </Anchor>
            <Anchor component={Link} to="/services" c="gray.4" size="sm">
              Services
            </Anchor>
            <Anchor component={Link} to="/about" c="gray.4" size="sm">
              About
            </Anchor>
            <Anchor component={Link} to="/contact" c="gray.4" size="sm">
              Contact
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;