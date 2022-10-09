import React from "react";
import { Button, Group, Divider, Paper } from "@mantine/core";

export default function ButtonClick({ next, back }) {
  return (
    <Paper mt="xl">
      <Divider my="sm" />
      <Group position="center" mt="xl" mb="xl">
        <Button variant="default" onClick={back}>
          Back
        </Button>
        <Button
          styles={(theme) => ({
            root: {
              backgroundColor: "#46166a",
              "&:hover": {
                backgroundColor: "#46166a",
              },
            },
          })}
          onClick={next}
        >
          Next step
        </Button>
      </Group>
      <Divider my="sm" />
    </Paper>
  );
}
