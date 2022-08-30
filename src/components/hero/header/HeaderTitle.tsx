import { Title } from "@mantine/core";

type HeaderTitleProps = {
  children: React.ReactNode;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return (
    <Title
      sx={(theme) => ({
        fontSize: 45,
        letterSpacing: 0,
        [theme.fn.smallerThan("md")]: {
          fontSize: 35,
        },
      })}>
      {children}
    </Title>
  );
};

export default HeaderTitle;
