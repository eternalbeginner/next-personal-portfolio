import { Grid, Stack, Title } from "@mantine/core";

import ResumeColItem from "@/components/resume/ResumeColItem";

type ResumeColProps = {
  children: React.ReactNode;
};

const ResumeCol = ({ children }: ResumeColProps) => {
  return (
    <Grid.Col span={6}>
      <Stack spacing={35}>{children}</Stack>
    </Grid.Col>
  );
};

ResumeCol.Item = ResumeColItem;

export default ResumeCol;
