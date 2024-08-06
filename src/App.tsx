import {
  AppShell,
  Box,
  Container,
  Group,
  Image,
  Stack,
  Title
} from "@mantine/core";
import { Controls } from "@src/components/controls";
import { Palette } from "@src/components/palette";

export function App() {
  return (
    <AppShell>
      <AppShell.Main>
        <Container pt={{ base: "lg", md: 50 }} px={{ base: 50, md: 0 }}>
          <Stack gap="xl">
            <Group>
              <Image height={60} src="/logo.png" alt="Logo image" />
              <Title>color-scale</Title>
            </Group>
            <Controls />
          </Stack>
        </Container>
        <Box mt="xl" p="md">
          <Palette />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
