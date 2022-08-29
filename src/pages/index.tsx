import { IconArrowUpRight } from "@tabler/icons";

import { Hero } from "@/components/hero";
import { Panel } from "@/components/panel";
import { Services } from "@/components/services";

import { services, socials } from "@/data/common";
import { avatar } from "@/data/hero";

const IndexPage: React.FC = () => {
  return (
    <>
      <Hero avatar={avatar} socials={socials}>
        <Hero.Header>
          <Hero.Header.SubTitle>Hi, I&apos;m Dwi Payana</Hero.Header.SubTitle>
          <Hero.Header.Title>
            Building a modern and minimalistic website with love.
          </Hero.Header.Title>
          <Hero.Header.Description>
            A <strong>Front-End Developer</strong> lives in Bali, Indonesia. I specialized in Web
            Design and Web Programming with a desire to give my best.
          </Hero.Header.Description>
        </Hero.Header>
        <Hero.Cta>
          <Hero.Cta.Secondary href="/downloads/test.pdf" isDownloadable>
            Download My Resume
          </Hero.Cta.Secondary>
          <Hero.Cta.Primary href="https://linkedin.com/in/wiipaaa" icon={IconArrowUpRight}>
            Connect With Me
          </Hero.Cta.Primary>
        </Hero.Cta>
      </Hero>
      <Panel id="services">
        <Panel.Title isCentered>Services.</Panel.Title>
        <Services>
          {services.map((item) => (
            <Services.Item
              key={item.id}
              title={item.title}
              icon={item.icon}
              iconColor={item.iconColor}>
              {item.description}
            </Services.Item>
          ))}
        </Services>
      </Panel>
    </>
  );
};

export default IndexPage;
