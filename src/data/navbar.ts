import { IconBrandGmail } from "@tabler/icons";
import { type NavbarBrandProps, type NavbarMenuProps } from "@/components/navbar";

export const brand: NavbarBrandProps = {
  label: "ini.dwiii@gmail.com",
  link: "mailto:ini.dwiii@gmail.com",
  icon: IconBrandGmail,
};

export const menu: NavbarMenuProps["items"] = [
  { label: "Me", link: "/" },
  { label: "Services", link: "#services" },
  { label: "Resume", link: "#resume" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "/contact" },
].map((item, index) => ({ ...item, id: index + 1 }));
