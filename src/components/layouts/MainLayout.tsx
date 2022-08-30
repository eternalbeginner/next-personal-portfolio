import { Affix, ActionIcon, Container, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import { Navbar } from "@/components/navbar";
import { brand, menu } from "@/data/navbar";
import { IconArrowUp } from "@tabler/icons";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Navbar brand={brand} menu={menu} />
      <Container size="md">
        {children}
        <Affix position={{ right: 20, bottom: 20 }}>
          <Transition transition="pop" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <ActionIcon
                color="dark"
                radius="xl"
                size="xl"
                variant="filled"
                onClick={() => scrollTo({ y: 0 })}>
                <IconArrowUp size={18} />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </Container>
    </>
  );
};

export default MainLayout;
