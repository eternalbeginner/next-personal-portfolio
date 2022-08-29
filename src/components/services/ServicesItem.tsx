import { Col, Stack, ThemeIcon, Title, Text, type DefaultMantineColor } from "@mantine/core";
import { IconCode, type TablerIcon } from "@tabler/icons";

type ServicesItemProps = {
  title: string;
  icon?: TablerIcon;
  iconColor?: DefaultMantineColor;
  children: React.ReactNode;
};

const ServicesItem: React.FC<ServicesItemProps> = (props) => {
  const { title, icon: Icon, iconColor = "blue", children } = props;

  return (
    <Col span={4}>
      <Stack spacing={30} py="xl">
        {Icon && (
          <ThemeIcon mx="auto" color={iconColor} radius="lg" size={60} variant="light">
            <Icon size={30} />
          </ThemeIcon>
        )}
        <Stack spacing={10} sx={{ textAlign: "center" }}>
          <Title order={3}>{title}</Title>
          <Text color="dimmed">{children}</Text>
        </Stack>
      </Stack>
    </Col>
  );
};

export default ServicesItem;
