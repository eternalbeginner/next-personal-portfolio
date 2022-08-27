import { Container } from "@mantine/core";

import { Navbar } from "@/components/navbar";
import { brand, menu } from "@/data/navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar brand={brand} menu={menu} />
      <Container size="lg">{children}</Container>
    </>
  );
};

export default MainLayout;
