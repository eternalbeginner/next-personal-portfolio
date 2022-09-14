import { Hero } from "@/components/hero";

import { avatar } from "@/data/hero";
import { IconMail } from "@tabler/icons";

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero avatar={avatar}>
        <Hero.Header>
          <Hero.Header.Title>Hi there! I&apos;ve been waiting to work with you.</Hero.Header.Title>
          <Hero.Header.Description>
            Let send me an email to further talk about collaboration.
          </Hero.Header.Description>
          <Hero.Cta>
            <Hero.Cta.Primary href="mailto:ini.dwiii@gmail.com" icon={IconMail}>
              Let&apos;s go
            </Hero.Cta.Primary>
          </Hero.Cta>
        </Hero.Header>
      </Hero>
    </>
  );
};

export default ContactPage;
