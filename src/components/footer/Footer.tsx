import { ActionIcon, Container, Group } from "@mantine/core";
import Link from "next/link";

import FooterBrand from "@/components/footer/FooterBrand";

import { type DataSocials } from "@/data/common";
import { IconBrandGmail } from "@tabler/icons";

type FooterProps = {
  menu: DataSocials;
};

const Footer: React.FC<FooterProps> = ({ menu }) => {
  return (
    <Container size="lg" py="lg">
      <Group position="apart">
        <Group>
          {menu.map((item) => (
            <Link key={item.id} href={item.link} passHref>
              <ActionIcon component="a" color={item.iconColor} radius="xl" size="lg">
                <item.icon size={20} />
              </ActionIcon>
            </Link>
          ))}
        </Group>
        <FooterBrand
          label="ini.dwiii@gmail.com"
          link="mailto:ini.dwiii@gmail.com"
          icon={IconBrandGmail}
        />
      </Group>
    </Container>
  );
};

export default Footer;
