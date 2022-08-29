import { Grid } from "@mantine/core";

import ServicesItem from "@/components/services/ServicesItem";

type ServicesProps = {
  children: React.ReactNode;
};

const Services = ({ children }: ServicesProps) => {
  return (
    <Grid gutter={40} justify="center">
      {children}
    </Grid>
  );
};

Services.Item = ServicesItem;

export default Services;
