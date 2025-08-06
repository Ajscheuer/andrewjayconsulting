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
  Avatar
} from '@mantine/core';
import { 
  IconFileText, 
  IconSearch, 
  IconMail, 
  IconCalendar, 
  IconClipboardData,
  IconClock,
  IconBolt,
  IconCircleCheck,
  IconVideo,
  IconArrowRight
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      icon: IconFileText,
      title: "📄 AI Meeting Summaries",
      description: "Automatically summarize Teams meetings and store follow-ups in SharePoint."
    },
    {
      icon: IconSearch,
      title: "🔍 Document Q&A Bot",
      description: "Ask a chatbot in Teams to retrieve answers from your internal SharePoint docs."
    },
    {
      icon: IconMail,
      title: "✉️ Email Assistant",
      description: "Auto-draft replies to common email types in Outlook using GPT."
    },
    {
      icon: IconCalendar,
      title: "📅 Daily Digest Bot",
      description: "A daily Teams message with your schedule, tasks, and document changes."
    },
    {
      icon: IconClipboardData,
      title: "📝 Smart Intake Forms",
      description: "Use GPT to classify and route form submissions in Power Apps."
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

      {/* Quick-Win AI Services Section */}
      <Box bg="gray.0" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" c="gray.9">
              Quick-Win AI Services
            </Title>
            <Grid>
              {services.map((service, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                  <Card 
                    shadow="sm" 
                    padding="lg" 
                    radius="md" 
                    withBorder
                    h="100%"
                    style={{
                      transition: 'box-shadow 0.2s ease',
                      '&:hover': {
                        boxShadow: 'var(--mantine-shadow-md)',
                      }
                    }}
                  >
                    <Stack gap="md">
                      <ThemeIcon size={48} radius="xl" color="softOrange" variant="light">
                        <service.icon size={24} />
                      </ThemeIcon>
                      <Title order={3} size="h4">{service.title}</Title>
                      <Text c="gray.6" style={{ flexGrow: 1 }}>
                        {service.description}
                      </Text>
                      <Anchor
                        href="https://calendly.com/andrewjay"
                        target="_blank"
                        rel="noopener noreferrer"
                        c="softOrange"
                        fw={500}
                        td="none"
                        styles={{
                          root: {
                            '&:hover': {
                              color: 'var(--mantine-color-orange-6)',
                            }
                          }
                        }}
                      >
                        Let&apos;s talk →
                      </Anchor>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
            <Text ta="center" c="gray.6" size="lg" mt="xl">
              <em>These aren't prototypes — they're practical, time-saving solutions you can deploy today.</em>
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Live Demo Section */}
      <Box bg="white" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Group justify="center" gap="md">
                <ThemeIcon size={32} radius="xl" color="softOrange" variant="light">
                  <IconVideo size={18} />
                </ThemeIcon>
                <Title order={2} ta="center" c="gray.9">
                  See It in Action
                </Title>
              </Group>
              <Text size="lg" ta="center" c="gray.6">
                Watch AI at work in Microsoft 365<br />
                Real workflows. Real results.
              </Text>
            </Stack>
            <Box
              style={{
                borderRadius: 'var(--mantine-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--mantine-shadow-lg)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&auto=format"
                alt="Team collaborating on AI-powered business solutions"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
            <Group justify="center">
              <Button
                component="a"
                href="https://calendly.com/andrewjay"
                target="_blank"
                rel="noopener noreferrer"
                color="deepBlue"
                size="md"
              >
                Want something like this? Book a Call
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box bg="blue.0" py="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Title order={2} ta="center" c="gray.9">
              What Clients Say
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Text c="gray.6">
                      &ldquo;Andrew made our internal tools feel 10× smarter — without us having to learn anything new.&rdquo;
                    </Text>
                    <Group gap="md">
                      <Avatar size="md" color="gray" />
                      <Stack gap={0}>
                        <Text fw={600} c="gray.9">[Coming soon]</Text>
                        <Text size="sm" c="gray.6">[Coming soon]</Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Text c="gray.6">
                      &ldquo;The AI integrations he built save us hours every week.&rdquo;
                    </Text>
                    <Group gap="md">
                      <Avatar size="md" color="gray" />
                      <Stack gap={0}>
                        <Text fw={600} c="gray.9">[Coming soon]</Text>
                        <Text size="sm" c="gray.6">[Coming soon]</Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
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
                  color="gray"
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