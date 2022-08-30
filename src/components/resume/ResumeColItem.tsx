import { SimpleGrid, Stack, Title } from "@mantine/core";

type ResumeColItemProps<T> = {
  data: T[];
  title: string;
  gridCol?: number;
  isGrid?: boolean;
  children: (data: T) => React.ReactNode;
};

const ResumeColItem = <T,>({
  data,
  title,
  gridCol = 1,
  isGrid = false,
  children,
}: ResumeColItemProps<T>) => {
  return (
    <Stack spacing={20}>
      <Title order={3}>{title}</Title>
      {isGrid ? (
        <SimpleGrid cols={gridCol}>{data.map((item) => children(item))}</SimpleGrid>
      ) : (
        data.map((item) => children(item))
      )}
    </Stack>
  );
};

export default ResumeColItem;
