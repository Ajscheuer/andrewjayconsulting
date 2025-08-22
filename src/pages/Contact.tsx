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
  TextInput,
  Textarea,
  ThemeIcon
} from '@mantine/core';
import { 
  IconMail,
  IconCalendar
} from '@tabler/icons-react';

const Contact: React.FC = () => {
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
              Get in Touch
            </Title>
            <Text 
              size="xl" 
              c="gray.6"
              ta="center"
              maw={800}
            >
              Ready to bring AI into your workflow? Let's discuss how I can help your business.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Options */}
      <Box bg="white" py="xl">
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack gap="xl">
                <Title order={2} c="gray.9">
                  Let's Start a Conversation
                </Title>
                <Text size="lg" c="gray.6">
                  The best way to get started is with a free discovery call. We'll discuss your 
                  current workflow and identify opportunities for AI automation.
                </Text>
                <Text c="gray.6">
                  No pressure, no sales pitch — just a conversation about how AI can help your business.
                </Text>
                
                <Stack gap="md">
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group gap="md">
                      <ThemeIcon size={48} radius="xl" color="softOrange" variant="light">
                        <IconCalendar size={24} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Title order={3} size="h4">Book a Discovery Call</Title>
                        <Text c="gray.6" size="sm">
                          30-minute free consultation
                        </Text>
                      </Stack>
                    </Group>
                    <Button
                      component="a"
                      href="https://calendly.com/andrew-andrewjayconsulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="softOrange"
                      size="md"
                      mt="md"
                      fullWidth
                    >
                      Schedule Now
                    </Button>
                  </Card>

                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group gap="md">
                      <ThemeIcon size={48} radius="xl" color="blue.1">
                        <IconMail size={24} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Title order={3} size="h4">Send an Email</Title>
                        <Text c="gray.6" size="sm">
                          andrew@andrewjayconsulting.com
                        </Text>
                      </Stack>
                    </Group>
                    <Button
                      component="a"
                      href="mailto:andrew@andrewjayconsulting.com"
                      color="deepBlue"
                      size="md"
                      mt="md"
                      fullWidth
                    >
                      Send Email
                    </Button>
                  </Card>
                </Stack>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack gap="xl">
                  <Title order={3} c="gray.9">
                    Send a Message
                  </Title>
                  <form>
                    <Stack gap="md">
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        radius="md"
                      />
                      <TextInput
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        radius="md"
                      />
                      <TextInput
                        label="Company"
                        placeholder="Your company (optional)"
                        radius="md"
                      />
                      <Textarea
                        label="Message"
                        placeholder="Tell me about your project or questions..."
                        required
                        radius="md"
                        minRows={4}
                      />
                      <Button 
                        type="submit" 
                        color="softOrange"
                        size="md"
                        radius="md"
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box bg="gray.0" py="xl">
        <Container size="lg">
          <Stack gap="xl">
            <Title order={2} ta="center" c="gray.9">
              Frequently Asked Questions
            </Title>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Title order={3} size="h4">What's included in a discovery call?</Title>
                    <Text c="gray.6">
                      We'll discuss your current workflow, identify pain points, and explore 
                      opportunities for AI automation. You'll get actionable insights and a 
                      clear next steps plan.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Title order={3} size="h4">How long does implementation take?</Title>
                    <Text c="gray.6">
                      Most projects can be completed in 2-4 weeks. Simple automations might 
                      be ready in a few days, while complex integrations take longer.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Title order={3} size="h4">Do you provide ongoing support?</Title>
                    <Text c="gray.6">
                      Yes! I offer training, maintenance, and optimization services to ensure 
                      your AI solutions continue to deliver value as your business evolves.
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="md">
                    <Title order={3} size="h4">What if I'm not technical?</Title>
                    <Text c="gray.6">
                      No problem! I handle all the technical implementation. You'll get 
                      simple, user-friendly solutions that work with tools you already know.
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

export default Contact; 