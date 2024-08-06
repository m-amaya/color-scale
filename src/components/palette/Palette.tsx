import { Grid } from "@mantine/core";
import { Shade } from "@src/components/palette/Shade";
import classes from "./Palette.module.css";

export function Palette() {
  return (
    <Grid className={classes.palette} columns={10} gutter={0}>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
      <Grid.Col className={classes.col} span={{ base: 10, md: 1 }}>
        <Shade />
      </Grid.Col>
    </Grid>
  );
}
