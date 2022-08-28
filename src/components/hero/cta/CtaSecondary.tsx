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
        href="/downloads/test.pdf"
        radius="xl"
        rightIcon={Icon && <Icon size={18} />}
        size="md"
        variant="default">
        {children}
      </Button>
    </Link>
  );
};

export default CtaSecondary;