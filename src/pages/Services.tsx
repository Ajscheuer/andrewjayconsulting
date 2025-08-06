import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Stack, 
  Grid, 
  Card, 
  Group, 
  Box, 
  Anchor,
  List,
  ThemeIcon
} from '@mantine/core';
import { 
  IconFileText, 
  IconSearch, 
  IconMail, 
  IconCalendar, 
  IconClipboardData,
  IconArrowRight,
  IconCheck,
  IconBulb,
  IconSettings,
  IconTarget
} from '@tabler/icons-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: IconFileText,
      title: "AI Meeting Summaries",
      description: "Automatically generate summaries and follow-ups from Teams meetings.",
      features: [
        "Automatic transcription and summarization",
        "Action item extraction and assignment",
        "SharePoint integration for storage",
        "Custom formatting and templates"
      ]
    },
    {
      icon: IconSearch,
      title: "Document Q&A Bot",
      description: "A chatbot in Teams that answers questions using your SharePoint content.",
      features: [
        "Natural language document search",
        "Integration with SharePoint libraries",
        "Context-aware responses",
        "Multi-document analysis"
      ]
    },
    {
      icon: IconMail,
      title: "Email Assistant",
      description: "Use GPT to auto-draft replies to common types of emails in Outlook.",
      features: [
        "Intelligent email categorization",
        "Auto-draft responses based on context",
        "Priority email identification",
        "Data extraction and routing"
      ]
    },
    {
      icon: IconCalendar,
      title: "Daily Digest Bot",
      description: "A morning briefing in Teams showing your day's tasks, meetings, and updates.",
      features: [
        "Personalized daily briefings",
        "Calendar and task integration",
        "Priority email summaries",
        "Customizable report format"
      ]
    },
    {
      icon: IconClipboardData,
      title: "Smart Intake Forms",
      description: "Classify, tag, and route Power Apps form submissions intelligently with GPT.",
      features: [
        "Dynamic form creation",
        "Automatic data extraction",
        "Intelligent routing and assignment",
        "Integration with existing workflows"
      ]
    }
  ];

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
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Stack gap="xl">
                <Title 
                  order={1} 
                  size="h1"
                  c="gray.9"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    lineHeight: 1.1 
                  }}
                >
                  AI Services for Microsoft 365
                </Title>
                <Text 
                  size="xl" 
                  c="gray.6"
                  maw={600}
                >
                  I help small businesses implement smart, practical AI workflows that plug directly into their existing Microsoft tools.
                </Text>
                <Button
                  component="a"
                  href="https://calendly.com/andrewjay"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  color="softOrange"
                  rightSection={<IconArrowRight size={20} />}
                  styles={{
                    root: {
                      boxShadow: 'var(--mantine-shadow-md)',
                      '&:hover': {
                        boxShadow: 'var(--mantine-shadow-lg)',
                      }
                    }
                  }}
                >
                  Book a Free Discovery Call
                </Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Box
                style={{
                  borderRadius: 'var(--mantine-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--mantine-shadow-xl)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop&auto=format"
                  alt="Professional team meeting discussing AI solutions"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box bg="white" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            {services.map((service, index) => (
              <Grid key={index} align="center" gutter="xl">
                <Grid.Col 
                  span={{ base: 12, lg: 6 }} 
                  order={{ base: 2, lg: index % 2 === 1 ? 1 : 2 }}
                >
                  <Box 
                    bg="gray.0" 
                    p="xl" 
                    style={{ borderRadius: 'var(--mantine-radius-md)' }}
                    ta="center"
                  >
                    <ThemeIcon size={80} radius="xl" color="softOrange" variant="light" mx="auto">
                      <service.icon size={40} />
                    </ThemeIcon>
                  </Box>
                </Grid.Col>
                <Grid.Col 
                  span={{ base: 12, lg: 6 }} 
                  order={{ base: 1, lg: index % 2 === 1 ? 2 : 1 }}
                >
                  <Stack gap="md">
                    <Title order={2} size="h2" c="gray.9">
                      {service.title}
                    </Title>
                    <Text size="lg" c="gray.6">
                      {service.description}
                    </Text>
                    <List 
                      spacing="sm"
                      icon={
                        <ThemeIcon color="softOrange" size={20} radius="xl">
                          <IconCheck size={12} />
                        </ThemeIcon>
                      }
                    >
                      {service.features.map((feature, featureIndex) => (
                        <List.Item key={featureIndex}>
                          <Text c="gray.6">{feature}</Text>
                        </List.Item>
                      ))}
                    </List>
                    <Group mt="md">
                      <Anchor
                        href="https://calendly.com/andrewjay"
                        target="_blank"
                        rel="noopener noreferrer"
                        c="softOrange"
                        fw={600}
                        td="none"
                        styles={{
                          root: {
                            '&:hover': {
                              color: 'var(--mantine-color-orange-6)',
                            }
                          }
                        }}
                      >
                        Let&apos;s discuss this service →
                      </Anchor>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Custom Solutions CTA */}
      <Box bg="blue.0" py="xl">
        <Container size="lg">
          <Stack align="center" gap="xl">
            <Stack align="center" gap="md">
              <Title order={2} ta="center" c="gray.9">
                Need something custom?
              </Title>
              <Text size="lg" ta="center" c="gray.6" maw={600}>
                I can help scope and implement tailored AI workflows unique to your team.
              </Text>
            </Stack>
            
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={48} radius="xl" color="blue.1">
                      <IconBulb size={24} />
                    </ThemeIcon>
                    <Title order={3} size="h5" ta="center">Discovery Session</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      We&apos;ll analyze your workflow and identify AI opportunities
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={48} radius="xl" color="blue.1">
                      <IconSettings size={24} />
                    </ThemeIcon>
                    <Title order={3} size="h5" ta="center">Custom Development</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Built specifically for your Microsoft 365 environment
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack align="center" gap="md">
                    <ThemeIcon size={48} radius="xl" color="blue.1">
                      <IconTarget size={24} />
                    </ThemeIcon>
                    <Title order={3} size="h5" ta="center">Ongoing Support</Title>
                    <Text ta="center" c="gray.6" size="sm">
                      Training, maintenance, and optimization as your needs evolve
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
            
            <Button
              component="a"
              href="https://calendly.com/andrewjay"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              color="softOrange"
              rightSection={<IconArrowRight size={20} />}
              styles={{
                root: {
                  boxShadow: 'var(--mantine-shadow-md)',
                  '&:hover': {
                    boxShadow: 'var(--mantine-shadow-lg)',
                  }
                }
              }}
            >
              Book a Free Discovery Call
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 