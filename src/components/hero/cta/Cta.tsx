import { Center, Group } from "@mantine/core";

import CtaPrimary from "@/components/hero/cta/CtaPrimary";
import CtaSecondary from "@/components/hero/cta/CtaSecondary";

type CtaProps = {
  children: React.ReactNode;
};

const Cta = ({ children }: CtaProps) => {
  return (
    <Center>
      <Group spacing="sm">{children}</Group>
    </Center>
  );
};

Cta.Primary = CtaPrimary;
Cta.Secondary = CtaSecondary;

export default Cta;
