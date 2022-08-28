import { type DefaultMantineColor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconPhoneCall,
  type TablerIcon,
} from "@tabler/icons";

export type DataSocial = {
  id: number;
  link: string;
  icon: TablerIcon;
  iconColor: DefaultMantineColor;
};

export type DataSocials = DataSocial[];

export const socials: DataSocials = [
  { link: "https://youtube.com", icon: IconBrandYoutube, iconColor: "red" },
  { link: "mailto:ini.dwiii@gmail.com", icon: IconBrandGmail, iconColor: "red" },
  { link: "https://github.com/eternalbeginner", icon: IconBrandGithub, iconColor: "dark" },
  { link: "https://linkedin.com/in/wiipaaa", icon: IconBrandLinkedin, iconColor: "blue" },
  { link: "tel:6281262360039", icon: IconPhoneCall, iconColor: "green" },
].map((item, index) => ({ ...item, id: index + 1 }));
