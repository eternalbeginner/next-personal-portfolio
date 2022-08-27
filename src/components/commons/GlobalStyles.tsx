import { Global } from "@mantine/core";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={{
        "*, html": {
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );
};

export default GlobalStyles;
