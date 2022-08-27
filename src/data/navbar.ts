import { IconBrandGmail } from "@tabler/icons";
import { type NavbarBrandProps, type NavbarMenuProps } from "@/components/navbar";

export const brand: NavbarBrandProps = {
  label: "ini.dwiii@gmail.com",
  link: "mailto:ini.dwiii@gmail.com",
  icon: IconBrandGmail,
};

export const menu: NavbarMenuProps["items"] = [
  { label: "Works", link: "/works" },
  { label: "Resume", link: "/resume" },
  { label: "Contact", link: "/resume" },
].map((item, index) => ({ ...item, id: index + 1 }));
