import { Anchor, Box, Stack, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons";
import Link from "next/link";

import { type DataExperience } from "@/data/common";

type ExperienceProps = {
  data: DataExperience;
};

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Link href={data.companyLink} passHref>
        <Anchor color="dark" size="lg" target="_blank" weight={500}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>{data.company}</span>
            <IconArrowUpRight size={18} />
          </Box>
        </Anchor>
      </Link>
      <Text>{data.job}</Text>
      <Text color="dimmed" size="sm">
        {data.startDate} - {data.endDate}
      </Text>
    </Stack>
  );
};

export default Experience;
