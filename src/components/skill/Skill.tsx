import { Stack, Text } from "@mantine/core";

import SkillItem from "@/components/skill/SkilItem";

import { type data } from "@/data/resume";

type SkillProps<T> = {
  data: T;
};

const Skill = <T extends typeof data["skill"]["items"][number]>({ data }: SkillProps<T>) => {
  return (
    <Stack key={data.id}>
      <Text size="lg" weight={500}>
        {data.label}
      </Text>
      {data.items.map((item) => (
        <SkillItem key={item.id} data={item} />
      ))}
    </Stack>
  );
};

export default Skill;
