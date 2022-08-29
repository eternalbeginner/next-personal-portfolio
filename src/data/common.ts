import { type DefaultMantineColor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconPhoneCall,
  IconCode,
  IconCodeOff,
  type TablerIcon,
} from "@tabler/icons";

export type DataSocial = {
  id: number;
  link: string;
  icon: TablerIcon;
  iconColor: DefaultMantineColor;
};

export type DataSocials = DataSocial[];

export type DataService = {
  id: number;
  title: string;
  description: string;
  icon: TablerIcon;
  iconColor: DefaultMantineColor;
};

export type DataServices = DataService[];

export const services: DataServices = [
  {
    title: "Web Dev",
    description: "Static website or web-app. I love to make fantastic and interactive websites.",
    icon: IconCode,
    iconColor: "blue",
  },
  {
    title: "No-Code",
    description: "I also offer services to develop apps with no-code solution.",
    icon: IconCodeOff,
    iconColor: "red",
  },
].map((item, index) => ({ ...item, id: index + 1 }));

export const socials: DataSocials = [
  { link: "https://youtube.com", icon: IconBrandYoutube, iconColor: "red" },
  { link: "mailto:ini.dwiii@gmail.com", icon: IconBrandGmail, iconColor: "red" },
  { link: "https://github.com/eternalbeginner", icon: IconBrandGithub, iconColor: "dark" },
  { link: "https://linkedin.com/in/wiipaaa", icon: IconBrandLinkedin, iconColor: "blue" },
  { link: "tel:6281262360039", icon: IconPhoneCall, iconColor: "green" },
].map((item, index) => ({ ...item, id: index + 1 }));
