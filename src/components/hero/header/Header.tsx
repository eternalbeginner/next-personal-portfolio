import { Stack, Title, Text } from "@mantine/core";

import HeaderDescription from "@/components/hero/header/HeaderDescription";
import HeaderTitle from "@/components/hero/header/HeaderTitle";
import HeaderSubTitle from "@/components/hero/header/HeaderSubTitle";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <Stack spacing={20}>{children}</Stack>;
};

Header.Description = HeaderDescription;
Header.Title = HeaderTitle;
Header.SubTitle = HeaderSubTitle;

export default Header;
