import { ActionIcon, Avatar, Center, Group, Stack } from "@mantine/core";
import Link from "next/link";

import { HeroCta } from "@/components/hero/cta";
import { HeroHeader } from "@/components/hero/header";

import { type DataAvatar } from "@/data/hero";
import { type DataSocials } from "@/data/common";

type HeroProps = {
  avatar?: DataAvatar;
  socials?: DataSocials;
  children: React.ReactNode;
};

const Hero = ({ avatar, socials, children }: HeroProps) => {
  return (
    <Stack pb={25} pt={80} spacing={30}>
      {avatar && (
        <Center>
          <Avatar alt={avatar.alt} src={avatar.src} size={avatar.size} radius={avatar.size / 2} />
        </Center>
      )}
      <Stack spacing={30} sx={{ width: "75%", margin: "auto", textAlign: "center" }}>
        {children}
        {socials && (
          <Group position="center">
            {socials.map((item) => (
              <Link key={item.id} href={item.link} passHref>
                <ActionIcon component="a" color={item.iconColor} radius="xl" size="lg">
                  <item.icon size={20} />
                </ActionIcon>
              </Link>
            ))}
          </Group>
        )}
      </Stack>
    </Stack>
  );
};

Hero.Cta = HeroCta;
Hero.Header = HeroHeader;

export default Hero;
