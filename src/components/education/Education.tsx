import { Anchor, Stack, Box, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons";
import Link from "next/link";

import { type DataEducation } from "@/data/common";

type EducationProps = {
  data: DataEducation;
};

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Link href={data.link} passHref>
        <Anchor color="dark" size="lg" target="_blank" weight={500}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>{data.name}</span>
            <IconArrowUpRight size={18} />
          </Box>
        </Anchor>
      </Link>
      <Text>
        {data.degree}, {data.title}
      </Text>
      <Text color="dimmed" size="sm">
        {data.startDate} - {data.endDate}
      </Text>
    </Stack>
  );
};

export default Education;
