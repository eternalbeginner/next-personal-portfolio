import { Group, Anchor } from "@mantine/core";
import { type TablerIcon } from "@tabler/icons";

type FooterBrandProps = {
  label: string;
  link: string;
  icon: TablerIcon;
};

const FooterBrand: React.FC<FooterBrandProps> = ({ label, link, icon: Icon }) => {
  return (
    <Group spacing="xs">
      <Icon size={18} />
      <Anchor href={link} color="dark" target="_blank">
        {label}
      </Anchor>
    </Group>
  );
};

export default FooterBrand;
