import { Container, Group } from "@mantine/core";

import NavbarBrand, { type NavbarBrandProps } from "@/components/navbar/NavbarBrand";
import NavbarMenu, { type NavbarMenuProps } from "@/components/navbar/NavbarMenu";

type NavbarProps = {
  brand: NavbarBrandProps;
  menu: NavbarMenuProps["items"];
};

const Navbar: React.FC<NavbarProps> = ({ brand, menu }) => {
  return (
    <Container py="lg" size="lg">
      <Group position="apart">
        <NavbarBrand {...brand} />
        <NavbarMenu items={menu} />
      </Group>
    </Container>
  );
};

export default Navbar;
