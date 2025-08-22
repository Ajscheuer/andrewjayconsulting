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
  TextInput,
  ThemeIcon,
  Avatar,
  List
} from '@mantine/core';
import { 
  IconClock,
  IconBolt,
  IconCircleCheck,
  IconArrowRight,
  IconCheck
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      image: "/images/services/AI Meeting Summaries.jpg",
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
      image: "/images/services/Document Q&A Bot.jpg",
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
      image: "/images/services/Email Assistant.webp",
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
      image: "/images/services/Daily Digest Bot.jpg",
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
      image: "/images/services/Smart Intake Forms.gif",
      title: "Smart Intake Forms",
      description: "Classify, tag, and route Power Apps form submissions intelligently with GPT.",
      features: [
        "Dynamic form creation",
        "Automatic data extraction",
        "Intelligent routing and assignment",
        "Integration with existing workflows"
      ]
    },
    {
      image: "/images/services/Power Apps Custom Business Apps.png",
      title: "Power Apps: Custom Business Apps",
      description: "Design and build model-driven or canvas apps tailored to your processes in Microsoft Power Apps.",
      features: [
        "Secure Dataverse data models",
        "Responsive canvas app UX",
        "Role-based access and governance",
        "Integration with Teams and SharePoint"
      ]
    },
    {
      image: "/images/services/Power Automate Workflow Automation.webp",
      title: "Power Automate: Workflow Automation",
      description: "Automate approvals, notifications, and data sync across Microsoft 365 and external systems.",
      features: [
        "Approval flows with audit trail",
        "Connectors for M365 and third-party apps",
        "Error handling and retries",
        "Run history monitoring and alerts"
      ]
    },
    {
      image: "/images/services/Power Platform End-to-End Solutions.png",
      title: "Power Platform: End-to-End Solutions",
      description: "Solution architecture combining Power Apps, Power Automate, and Dataverse with best practices.",
      features: [
        "Environment strategy and ALM",
        "Managed solutions and pipelines",
        "Security, DLP, and governance",
        "Center of Excellence setup guidance"
      ]
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        style={{
          background: 'linear-gradient(to bottom right, var(--mantine-color-blue-0), var(--mantine-color-white))',
          position: 'relative',
          overflow: 'hidden'
        }}
        py={{ base: 'xl', lg: 80 }}
      >
        <Container size="xl">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="xl">
                <Title 
                  order={1} 
                  size="h1"
                  c="gray.9"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                    lineHeight: 1.1 
                  }}
                >
                  Bring AI Into Your Workflow
                </Title>
                <Text 
                  size="xl" 
                  c="gray.6"
                >
                  Save time, reduce busywork, and unlock the full potential of Microsoft 365 — 
                  without switching tools or hiring a team.
                </Text>
                <Group gap="md">
                  <Button
                    component="a"
                    href="https://calendly.com/andrew-andrewjayconsulting"
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
                  <Button
                    component={Link}
                    to="/services"
                    size="lg"
                    variant="outline"
                    color="deepBlue"
                  >
                    View Services
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box 
                pos="relative" 
                style={{ 
                  borderRadius: 'var(--mantine-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--mantine-shadow-xl)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format"
                  alt="Business analytics dashboard showing AI automation metrics"
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

      {/* Top Benefits Section */}
      <Box bg="white" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" c="gray.9">
              Stop wasting hours on manual work.
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={64} radius="xl" color="blue.1">
                    <IconClock size={32} />
                  </ThemeIcon>
                  <Title order={3} size="h4" ta="center">Save Time</Title>
                  <Text ta="center" c="gray.6">
                    Automate repetitive tasks and get hours back in your day
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={64} radius="xl" color="blue.1">
                    <IconBolt size={32} />
                  </ThemeIcon>
                  <Title order={3} size="h4" ta="center">Automate Busywork</Title>
                  <Text ta="center" c="gray.6">
                    Let AI handle data entry, summaries, and routine processes
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={64} radius="xl" color="blue.1">
                    <IconCircleCheck size={32} />
                  </ThemeIcon>
                  <Title order={3} size="h4" ta="center">Use Familiar Tools</Title>
                  <Text ta="center" c="gray.6">
                    Build on Microsoft 365 apps your team already knows
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Services Banners Section */}
      <Box bg="white" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            {services.map((service, index) => {
              const gradientDirection = index % 2 === 0 ? 'to right' : 'to left';
              const alignmentStyle = index % 2 === 0 ? { marginLeft: 0, marginRight: 'auto' } : { marginLeft: 'auto', marginRight: 0 };
              const overlay = index === 0
                ? `linear-gradient(${gradientDirection}, rgba(11,17,26,0.72) 0%, rgba(11,17,26,0.60) 40%, rgba(11,17,26,0.38) 70%, rgba(11,17,26,0.21) 100%)`
                : `linear-gradient(${gradientDirection}, rgba(5,8,13,0.82) 0%, rgba(5,8,13,0.78) 35%, rgba(5,8,13,0.75) 60%, rgba(5,8,13,0.71) 100%)`;
              return (
                <Box
                  key={index}
                  style={{
                    borderRadius: 'var(--mantine-radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--mantine-color-gray-9)',
                    backgroundImage: `${overlay}, url("${service.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: 'var(--mantine-shadow-md)'
                  }}
                >
                  <Box p={{ base: 'lg', md: 'xl' }} style={{ minHeight: 360 }}>
                    <Box style={{ maxWidth: 720, ...alignmentStyle }}>
                      <Stack gap="md">
                        <Title order={2} size="h2" c="gray.0">
                          {service.title}
                        </Title>
                        <Text size="lg" c="gray.2">
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
                              <Text c="gray.3">{feature}</Text>
                            </List.Item>
                          ))}
                        </List>
                        <Group mt="md">
                          <Anchor
                            href="https://calendly.com/andrew-andrewjayconsulting"
                            target="_blank"
                            rel="noopener noreferrer"
                            c="softOrange"
                            fw={600}
                            td="none"
                            styles={{
                              root: {
                                '&:hover': {
                                  color: 'var(--mantine-color-orange-6)'
                                }
                              }
                            }}
                          >
                            Let&apos;s discuss this service →
                          </Anchor>
                        </Group>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>

      

      

      {/* Lead Magnet Section */}
      <Box bg="white" py="xl">
        <Container size="md">
          <Stack align="center" gap="lg">
            <Title order={2} ta="center" c="gray.9">
              Not ready to book a call?
            </Title>
            <Text size="lg" ta="center" c="gray.6">
              Download this free guide:<br />
              <strong>"5 AI Automations You Can Build Into SharePoint and Outlook This Weekend"</strong>
            </Text>
            <Box w="100%" maw={400}>
              <form>
                <Group gap="md" grow>
                  <TextInput
                    type="email"
                    placeholder="Enter your email"
                    required
                    radius="md"
                    style={{ flex: 1 }}
                  />
                  <Button 
                    type="submit" 
                    color="softOrange"
                    radius="md"
                  >
                    Get the Free Guide
                  </Button>
                </Group>
              </form>
              <Text size="sm" c="gray.5" ta="center" mt="xs">
                No spam. Unsubscribe anytime.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Andrew Section */}
      <Box bg="gray.0" py="xl">
        <Container size="lg">
          <Stack gap="xl" align="center">
            <Title order={2} ta="center" c="gray.9">
              About Andrew
            </Title>
            <Card shadow="sm" padding="xl" radius="md" withBorder w="100%">
              <Group align="flex-start" gap="xl">
                <Avatar 
                  size={120} 
                  radius="xl" 
                  src="/images/headshot.png"
                  alt="Andrew Jay headshot"
                  style={{ minWidth: 120 }}
                />
                <Stack gap="md" style={{ flex: 1 }}>
                  <Text size="lg" c="gray.7">
                    <strong>Hi, I&apos;m Andrew Jay</strong> — a software developer and AI strategist.
                  </Text>
                  <Text c="gray.6">
                    I help small businesses unlock real productivity using the Microsoft 365 tools they already use.
                  </Text>
                  <Text c="gray.6">
                    No hype. Just real, working AI.
                  </Text>
                </Stack>
              </Group>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 