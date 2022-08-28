import { Title } from "@mantine/core";

type HeaderSubTitleProps = {
  children: React.ReactNode;
};

const HeaderSubTitle: React.FC<HeaderSubTitleProps> = ({ children }) => {
  return (
    <Title order={3} sx={{ letterSpacing: 0 }}>
      {children}
    </Title>
  );
};

export default HeaderSubTitle;
