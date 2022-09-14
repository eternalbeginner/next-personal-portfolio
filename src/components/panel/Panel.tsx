import { Stack, type StackProps } from "@mantine/core";

import PanelTitle from "@/components/panel/PanelTitle";

type PanelProps = StackProps & {
  children: React.ReactNode;
};

const Panel = ({ children, ...stackProps }: PanelProps) => {
  return (
    <Stack
      py={50}
      {...stackProps}
      spacing={30}
      sx={(theme) => ({
        [theme.fn.smallerThan("md")]: {
          paddingTop: theme.spacing.sm,
          paddingBottom: theme.spacing.sm,
        },
      })}>
      {children}
    </Stack>
  );
};

Panel.Title = PanelTitle;

export default Panel;
