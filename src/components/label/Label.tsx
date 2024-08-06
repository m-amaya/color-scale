import { Flex, Group, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { BiHelpCircle } from "react-icons/bi";

type LabelProps = {
  children: string;
  tooltip: string;
};

export function Label({ children, tooltip }: LabelProps) {
  const theme = useMantineTheme();
  return (
    <Group gap={3}>
      <Text size="sm" fw={600}>
        {children}
      </Text>
      <Tooltip label={tooltip}>
        <Flex>
          <BiHelpCircle color={theme.colors.gray[6]} size={18} />
        </Flex>
      </Tooltip>
    </Group>
  );
}
