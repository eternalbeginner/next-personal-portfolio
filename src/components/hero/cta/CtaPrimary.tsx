import { Button } from "@mantine/core";
import { type TablerIcon } from "@tabler/icons";
import Link from "next/link";

type CtaPrimaryProps = {
  href: string;
  icon?: TablerIcon;
  children: React.ReactNode;
};

const CtaPrimary: React.FC<CtaPrimaryProps> = ({ href, icon: Icon, children }) => {
  return (
    <Link href={href} passHref>
      <Button
        component="a"
        color="dark"
        radius="xl"
        rightIcon={Icon && <Icon size={18} />}
        size="md"
        sx={(theme) => ({ [theme.fn.smallerThan("md")]: { width: "100%" } })}>
        {children}
      </Button>
    </Link>
  );
};

export default CtaPrimary;
