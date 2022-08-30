import { Anchor, Box, Button, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowUpRight, IconCheck, IconDownload } from "@tabler/icons";
import Link from "next/link";

import { Certification } from "@/components/certification";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Panel } from "@/components/panel";
import { Services } from "@/components/services";
import { Resume } from "@/components/resume";

import {
  type DataEducation,
  type DataExperience,
  services,
  socials,
  type DataCertification,
} from "@/data/common";
import { avatar } from "@/data/hero";
import { data } from "@/data/resume";
import { Skill } from "@/components/skill";

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
      <Panel id="resume">
        <Panel.Title>Resume.</Panel.Title>
        <Resume>
          <Resume.Col>
            <Resume.Col.Item<DataExperience>
              data={data.experience.items}
              title={data.experience.title}>
              {(data) => <Experience key={data.id} data={data} />}
            </Resume.Col.Item>
            <Resume.Col.Item<typeof data.skill.items[number]>
              data={data.skill.items}
              gridCol={2}
              title={data.skill.title}
              isGrid>
              {(data) => <Skill key={data.id} data={data} />}
            </Resume.Col.Item>
          </Resume.Col>
          <Resume.Col>
            <Resume.Col.Item<DataEducation>
              data={data.education.items}
              title={data.education.title}>
              {(data) => <Education key={data.id} data={data} />}
            </Resume.Col.Item>
            <Resume.Col.Item<DataCertification>
              data={data.certification.items}
              title={data.certification.title}>
              {(data) => <Certification key={data.id} data={data} />}
            </Resume.Col.Item>
          </Resume.Col>
        </Resume>
        <Group mt="md" position="center">
          <Button
            component="a"
            color="dark"
            download={true}
            href="/downloads/test.pdf"
            radius="xl"
            rightIcon={<IconDownload size={18} />}
            sx={(theme) => ({ [theme.fn.smallerThan("md")]: { width: "100%" } })}>
            Download My Full Resume
          </Button>
        </Group>
      </Panel>
      <Panel id="projects">
        <Panel.Title>Projects I&apos;ve Been Built</Panel.Title>
        <Grid>
          <Grid.Col md={6}>Hello</Grid.Col>
        </Grid>
      </Panel>
    </>
  );
};

export default IndexPage;
