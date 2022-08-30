import { Group, Text, useMantineTheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

import { type DataSkill } from "@/data/common";

type SkillItemProps = {
  data: DataSkill;
};
const SkillItem: React.FC<SkillItemProps> = ({ data }) => {
  const { colors } = useMantineTheme();

  return (
    <Group spacing="xs">
      <Text>{data.label}</Text>
      {data.isConfident && <IconCheck color={colors.green[9]} size={16} />}
    </Group>
  );
};

export default SkillItem;
