import { Title } from "@mantine/core";

type HeaderTitleProps = {
  children: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return <Title sx={{ fontSize: 45, letterSpacing: 0 }}>{children}</Title>;
};

export default HeaderTitle;
