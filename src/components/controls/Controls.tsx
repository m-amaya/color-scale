import {
  ColorPicker,
  Grid,
  Group,
  NativeSelect,
  NumberInput,
  Slider,
  Stack,
  Switch,
  TextInput
} from "@mantine/core";
import { Label } from "@src/components/label";

export function Controls() {
  return (
    <Grid columns={3} gutter={{ base: "md", md: 50 }}>
      <Grid.Col span={{ base: 3, md: 1 }}>
        <Stack>
          <Group gap="xs">
            <TextInput label="Base color" />
            <NativeSelect
              label="Format"
              data={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}
            />
          </Group>
          <ColorPicker format="rgba" fullWidth />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 3, md: 1 }}>
        <Stack gap="md">
          <Group gap="xs">
            <NumberInput defaultValue={10} label="Number of colors" />
            <NativeSelect label="Mode" data={["rgb", "lab", "hsl", "lch"]} />
          </Group>
          <Stack gap={8}>
            <Label tooltip="Adjust the luminance">Luminance</Label>
            <Slider min={0} max={100} step={1} />
          </Stack>
          <Stack gap={8}>
            <Label
              tooltip={`Gamma-correction can be used to "shift" a scale's center more to the beginning or the end. This is typically used to "even" the lightness gradient.`}
            >
              Gamma
            </Label>
            <Slider min={0} max={5} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label
              tooltip={`Reduces the color range by cutting off a fraction of the gradient on both sides.`}
            >
              Padding
            </Label>
            <Slider min={0} max={1} step={0.01} />
          </Stack>
          <Switch
            label={
              <Label tooltip="Makes sure the lightness range is spread evenly across the color scale.">
                Correct Lightness
              </Label>
            }
            labelPosition="left"
          />
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 3, md: 1 }}>
        <Stack gap="md">
          <Stack gap={8}>
            <Label tooltip="Darken the scale">Darken</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label tooltip="Brighten the scale">Brighten</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label tooltip="Saturate the scale">Saturate</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label tooltip="Desaturate the scale">Desaturate</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label tooltip="Mix with black">Shade</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
          <Stack gap={8}>
            <Label tooltip="Mix with white">Tint</Label>
            <Slider min={0} max={3} step={0.01} />
          </Stack>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
