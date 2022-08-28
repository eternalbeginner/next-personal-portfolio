import { Global } from "@mantine/core";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: 700,
            src: `url("/fonts/Outfit/Bold.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontWeight: 500,
            src: `url("/fonts/Outfit/Medium.ttf")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Outfit",
            fontStyle: "normal",
            src: `url("/fonts/Outfit/Regular.ttf")`,
          },
        },
        {
          "*, html": {
            scrollBehavior: "smooth",
          },
          body: {
            margin: 0,
            padding: 0,
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
