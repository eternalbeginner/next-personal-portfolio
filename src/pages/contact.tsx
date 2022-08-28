import { Hero } from "@/components/hero";

import { avatar } from "@/data/hero";

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero avatar={avatar}>
        <Hero.Header>
          <Hero.Header.Title>Hi there! I&apos;ve been waiting to work with you.</Hero.Header.Title>
          <Hero.Header.Description>
            Fill the form below to <strong>send me email</strong>.
          </Hero.Header.Description>
        </Hero.Header>
      </Hero>
    </>
  );
};

export default ContactPage;
