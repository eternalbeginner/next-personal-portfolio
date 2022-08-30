import { Anchor, Group } from "@mantine/core";
import Link from "next/link";

export type NavbarMenuProps = {
  items: {
    id: number;
    label: string;
    link: string;
  }[];
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({ items }) => {
  return (
    <Group spacing="xl" sx={(theme) => ({ [theme.fn.smallerThan("md")]: { display: "none" } })}>
      {items.map((item) => (
        <Link key={item.id} href={item.link} passHref>
          <Anchor color="dark">{item.label}</Anchor>
        </Link>
      ))}
    </Group>
  );
};

export default NavbarMenu;
