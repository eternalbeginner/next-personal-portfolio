import { Group, Title } from "@mantine/core";

type PanelTitleProps = {
  isCentered?: boolean;
  children: React.ReactNode;
};

const PanelTitle: React.FC<PanelTitleProps> = ({ isCentered = false, children }) => {
  return (
    <Group position={isCentered ? "center" : "left"}>
      <Title sx={{ maxWidth: "30%" }}>{children}</Title>
    </Group>
  );
};

export default PanelTitle;
