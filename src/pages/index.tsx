import { Anchor, Box, Button, Center, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowUpRight, IconDownload, IconHeartHandshake } from "@tabler/icons";

import { Certification } from "@/components/certification";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Panel } from "@/components/panel";
import { Resume } from "@/components/resume";
import { Services } from "@/components/services";
import { Skill } from "@/components/skill";

import {
  projects,
  services,
  socials,
  type DataCertification,
  type DataEducation,
  type DataExperience,
} from "@/data/common";
import { avatar } from "@/data/hero";
import { data } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

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
          <Hero.Cta.Secondary href="/downloads/resume.pdf" isDownloadable>
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
            href="/downloads/resume.pdf"
            radius="xl"
            rightIcon={<IconDownload size={18} />}
            sx={(theme) => ({ [theme.fn.smallerThan("md")]: { width: "100%" } })}>
            Download My Full Resume
          </Button>
        </Group>
      </Panel>
      <Panel id="projects">
        <Panel.Title>Projects I&apos;ve Been Built.</Panel.Title>
        <Grid>
          {projects.map((item) => (
            <Grid.Col key={item.id} md={6}>
              <Stack>
                <Image
                  alt={item.label}
                  width={472}
                  height={472}
                  src={item.image}
                  title={item.label}
                />
                <Stack pb="xl" spacing={0}>
                  <Title order={4}>{item.label}</Title>
                  <Text>{item.description}</Text>
                </Stack>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Panel>
      <Panel id="contact" pt={50} pb={100}>
        <Center>
          <Stack
            sx={(theme) => ({
              maxWidth: "70%",
              [theme.fn.smallerThan("md")]: { maxWidth: "100%" },
            })}>
            <Title>
              Let me know if you&apos;re interested to talk about a collaboration.
              <IconHeartHandshake size={30} />
            </Title>
            <Link href="https://linkedin.com/in/wiipaaa" passHref>
              <Anchor<React.ComponentPropsWithoutRef<typeof Title>>
                component={Title}
                variant="link"
                size={30}>
                Let&apos;s collaborate
              </Anchor>
            </Link>
          </Stack>
        </Center>
      </Panel>
    </>
  );
};

export default IndexPage;
