import { Text } from "@mantine/core";

type HeaderDescriptionProps = {
  children: React.ReactNode;
};

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default HeaderDescription;
