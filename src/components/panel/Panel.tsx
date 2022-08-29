import { Stack, type StackProps } from "@mantine/core";

import PanelTitle from "@/components/panel/PanelTitle";

type PanelProps = StackProps & {
  children: React.ReactNode;
};

const Panel = ({ children, ...stackProps }: PanelProps) => {
  return (
    <Stack {...stackProps} py={50} spacing={30}>
      {children}
    </Stack>
  );
};

Panel.Title = PanelTitle;

export default Panel;
