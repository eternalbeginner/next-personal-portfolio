import { Grid } from "@mantine/core";

import ResumeCol from "@/components/resume/ResumeCol";

type ResumeProps = {
  children: React.ReactNode;
};

const Resume = ({ children }: ResumeProps) => {
  return <Grid>{children}</Grid>;
};

Resume.Col = ResumeCol;

export default Resume;
