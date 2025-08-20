import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Grid, 
  Card, 
  Box, 
  Avatar,
  ThemeIcon
} from '@mantine/core';
import { 
  IconCode,
  IconBrain,
  IconUsers,
  IconTarget
} from '@tabler/icons-react';

const About: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        style={{
          background: 'linear-gradient(to bottom right, var(--mantine-color-blue-0), var(--mantine-color-white))',
        }}
        py={{ base: 'xl', lg: 80 }}
      >
        <Container size="xl">
          <Stack gap="xl" align="center">
            <Title 
              order={1} 
              size="h1"
              c="gray.9"
              ta="center"
              style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                lineHeight: 1.1 
              }}
            >
              About Andrew Jay
            </Title>
            <Text 
              size="xl" 
              c="gray.6"
              ta="center"
              maw={800}
            >
              Software developer and AI strategist helping small businesses unlock real productivity using Microsoft 365.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* About Content */}
      <Box bg="white" py="xl">
        <Container size="lg">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="xl">
                <Title order={2} c="gray.9">
                  Hi, I'm Andrew Jay
                </Title>
                <Text size="lg" c="gray.6">
                  I'm a software developer and AI strategist with a passion for helping small businesses 
                  leverage technology to work smarter, not harder.
                </Text>
                <Text c="gray.6">
                  My approach is simple: I help you implement practical AI solutions that integrate 
                  seamlessly with the Microsoft 365 tools your team already uses. No complex new systems 
                  to learn, no expensive consultants to hire.
                </Text>
                <Text c="gray.6">
                  I focus on real, working solutions that save time and reduce busywork. No hype, 
                  just results.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack align="center" gap="xl">
                  <Avatar 
                    size={200} 
                    radius="xl" 
                    src="/images/headshot.png"
                    alt="Andrew Jay headshot"
                  />
                  <Stack gap="md" align="center">
                    <Title order={3} ta="center">Andrew Jay</Title>
                    <Text c="gray.6" ta="center">
                      Software Developer & AI Strategist
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Expertise Section */}
      <Box bg="gray.0" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" c="gray.9">
              What I Do
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={64} radius="xl" color="blue.1">
                      <IconCode size={32} />
                    </ThemeIcon>
                    <Title order={3} size="h4" ta="center">Development</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Custom software solutions and integrations
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={64} radius="xl" color="blue.1">
                      <IconBrain size={32} />
                    </ThemeIcon>
                    <Title order={3} size="h4" ta="center">AI Strategy</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Practical AI implementation for business
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={64} radius="xl" color="blue.1">
                      <IconUsers size={32} />
                    </ThemeIcon>
                    <Title order={3} size="h4" ta="center">Training</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Team training and workflow optimization
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={64} radius="xl" color="blue.1">
                      <IconTarget size={32} />
                    </ThemeIcon>
                    <Title order={3} size="h4" ta="center">Consulting</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Strategic guidance and ongoing support
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 