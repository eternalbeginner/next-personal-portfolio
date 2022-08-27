import { Group, Anchor, type DefaultMantineColor } from "@mantine/core";
import { IconBrandGmail, type TablerIcon } from "@tabler/icons";

export type NavbarBrandProps = {
  label: string;
  link: string;
  icon?: TablerIcon;
};

const NavbarBrand: React.FC<NavbarBrandProps> = (props) => {
  const { label, link, icon: Icon = IconBrandGmail } = props;

  return (
    <Group spacing="xs">
      <Icon size={18} />
      <Anchor href={link} color="dark" target="_blank">
        {label}
      </Anchor>
    </Group>
  );
};

export default NavbarBrand;
