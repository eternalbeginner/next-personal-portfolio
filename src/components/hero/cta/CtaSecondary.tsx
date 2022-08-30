import { Button } from "@mantine/core";
import { type TablerIcon } from "@tabler/icons";
import Link from "next/link";

type CtaSecondaryProps = {
  href: string;
  icon?: TablerIcon;
  isDownloadable?: boolean;
  children: React.ReactNode;
};

const CtaSecondary: React.FC<CtaSecondaryProps> = (props) => {
  const { href, icon: Icon, isDownloadable = false, children } = props;

  return (
    <Link href={href} download={isDownloadable} passHref>
      <Button
        component="a"
        color="dark"
        download={true}
        href="/downloads/resume.pdf"
        radius="xl"
        rightIcon={Icon && <Icon size={18} />}
        size="md"
        sx={(theme) => ({ [theme.fn.smallerThan("md")]: { width: "100%" } })}
        variant="default">
        {children}
      </Button>
    </Link>
  );
};

export default CtaSecondary;
