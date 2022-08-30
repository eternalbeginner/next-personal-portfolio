import { Anchor, Stack, Text } from "@mantine/core";
import Link from "next/link";

import { type DataCertification } from "@/data/common";

type CertificationProps = {
  data: DataCertification;
};

const Certification: React.FC<CertificationProps> = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Link href={data.link} passHref>
        <Anchor color="dark" size="lg" target="_blank" weight={500}>
          {data.name}
        </Anchor>
      </Link>
      <Text>{data.obtainedFrom}</Text>
      <Text color="dimmed" size="sm">
        {data.obtainedOn}
      </Text>
    </Stack>
  );
};

export default Certification;
