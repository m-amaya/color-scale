import { ActionIcon, Flex, Text, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { BiCopy, BiSolidColorFill, BiText } from "react-icons/bi";
import classes from "./Shade.module.css";

export function Shade() {
  const { hovered, ref } = useHover();

  return (
    <Flex
      align="center"
      bg="tomato"
      className={classes.shade}
      direction={{ base: "row", md: "column" }}
      gap="lg"
      justify={{ base: "space-between", md: "flex-start" }}
      p="md"
      ref={ref}
    >
      <Flex
        align={{ base: "flex-start", md: "center" }}
        direction="column"
        gap={4}
      >
        <Text fw={600} lh={1.1} size="md" ta="center">
          Value
        </Text>
        <Text lh={1.1} size="sm" ta="center">
          Color Name
        </Text>
      </Flex>
      {hovered && (
        <Flex direction={{ base: "row", md: "column" }} gap="xs">
          <Tooltip label="Set as text color">
            <ActionIcon color="white" variant="transparent">
              <BiText size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Set as background color">
            <ActionIcon color="white" variant="transparent">
              <BiSolidColorFill size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Copy">
            <ActionIcon color="white" variant="transparent">
              <BiCopy size={20} />
            </ActionIcon>
          </Tooltip>
        </Flex>
      )}
    </Flex>
  );
}
