import { type DefaultMantineColor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconPhoneCall,
  IconCode,
  IconCodeOff,
  type TablerIcon,
} from "@tabler/icons";

export type DataCertification = {
  id: number;
  name: string;
  link: string;
  obtainedFrom: string;
  obtainedOn: string;
};

export type DataCertifications = DataCertification[];

export type DataEducation = {
  id: number;
  name: string;
  degree: string;
  title: string;
  link: string;
  startDate: string;
  endDate: string;
};

export type DataEducations = DataEducation[];

export type DataExperience = {
  id: number;
  company: string;
  companyLink: string;
  job: string;
  jobType: "internship" | "work";
  jobDescription: string;
  startDate: string;
  endDate: string;
};

export type DataExperiences = DataExperience[];

export type DataProject = {
  id: number;
  label: string;
  description: string;
  image: string;
};

export type DataProjects = DataProject[];

export type DataService = {
  id: number;
  title: string;
  description: string;
  icon: TablerIcon;
  iconColor: DefaultMantineColor;
};

export type DataServices = DataService[];

export type DataSkill = {
  id: number;
  label: string;
  isConfident: boolean;
};

export type DataSkills = {
  soft: DataSkill[];
  language: DataSkill[];
  framework: DataSkill[];
  tool: DataSkill[];
};

export type DataSocial = {
  id: number;
  link: string;
  icon: TablerIcon;
  iconColor: DefaultMantineColor;
};

export type DataSocials = DataSocial[];

export const certifications: DataCertifications = [
  {
    name: "CompTIA IT Fundamentals (FC0-U61) Cert Prep 1: Computer Basics, Hardware, and Operating System",
    link: "https://www.linkedin.com/learning/certificates/9af77178b9349d0c9cf35d09b843c4d312b5f43a470ca54d9d24413f3b12046d?trk=share_certificate",
    obtainedFrom: "LinkedIn Learning",
    obtainedOn: "Nov 2021",
  },
  {
    name: "Server Administration Essential Training",
    link: "https://www.linkedin.com/learning/certificates/71a68339ab4ab6c4a7bb131069336b934b351879dd1b6b09365b70b5611142ae?trk=share_certificate",
    obtainedFrom: "LinkedIn Learning",
    obtainedOn: "Nov 2021",
  },
].map((item, index) => ({ ...item, id: index + 1 } as DataCertification));

export const educations: DataEducations = [
  {
    name: "Lithan Academy",
    degree: "Applied Degree",
    title: "Smart System",
    link: "https://www.lithan.com",
    startDate: "2021",
    endDate: "Pursuing",
  },
  {
    name: "ITB STIKOM Bali",
    degree: "Bachelor Degree",
    title: "Information System",
    link: "https://stikom-bali.ac.id",
    startDate: "2021",
    endDate: "Pursuing",
  },
  {
    name: "SMKN 1 Denpasar",
    degree: "Student",
    title: "Software Engineer",
    link: "https://smkn1denpasar.sch.id",
    startDate: "2018",
    endDate: "2021",
  },
].map((item, index) => ({ ...item, id: index + 1 } as DataEducation));

export const experiences: DataExperiences = [
  {
    company: "Ganeshcom Studio",
    companyLink: "https://www.ganeshcomstudio.com/",
    job: "Junior Front-End Developer",
    jobType: "internship",
    jobDescription:
      "In this internship, I contributed as a junior front-end developer. I learn many new web technologies, help develop websites, and sometimes can be a tester for the apps they built.",
    startDate: "October 2019",
    endDate: "December 2019",
  },
].map((item, index) => ({ ...item, id: index + 1 } as DataExperience));

export const projects: DataProjects = [
  {
    label: "E-Government",
    description:
      "Web application used to report public aspirations from poepole towards the government.",
    image: "/images/projects/1.png",
  },
  {
    label: "Visitor Parking Log",
    description:
      "App thats used to logging visitor parking data, created with Microsoft PowerApps and Microsoft Sharepoint.",
    image: "/images/projects/2.png",
  },
  {
    label: "Product's Barcode Scanner",
    description: "Micosoft PowerApps based application, used to scan the product's barcode",
    image: "/images/projects/3.png",
  },
  {
    label: "Translation App",
    description: "Languages translation mobile app created using Microsoft PowerApps",
    image: "/images/projects/4.png",
  },
].map((item, index) => ({ ...item, id: index + 1 } as DataProject));

export const services: DataServices = [
  {
    title: "Web Dev",
    description: "Static website or web-app. I love to make fantastic and interactive websites.",
    icon: IconCode,
    iconColor: "cyan",
  },
  {
    title: "No-Code",
    description: "I also offer services to develop apps with no-code solution.",
    icon: IconCodeOff,
    iconColor: "cyan",
  },
].map((item, index) => ({ ...item, id: index + 1 } as DataService));

export const skills: DataSkills = {
  soft: [
    { label: "Problem Solving", isConfident: true },
    { label: "Adaptibility", isConfident: true },
    { label: "Curiosity", isConfident: false },
    { label: "Teamwork", isConfident: false },
    { label: "Desire to Learn", isConfident: true },
  ].map((item, index) => ({ ...item, id: index + 1 } as DataSkill)),
  language: [
    { label: "HTML", isConfident: true },
    { label: "CSS", isConfident: true },
    { label: "JavaScript", isConfident: true },
    { label: "TypeScript", isConfident: false },
    { label: "Python", isConfident: false },
    { label: "PHP", isConfident: true },
  ].map((item, index) => ({ ...item, id: index + 1 } as DataSkill)),
  framework: [
    { label: "React", isConfident: true },
    { label: "Laravel", isConfident: false },
  ].map((item, index) => ({ ...item, id: index + 1 } as DataSkill)),
  tool: [
    { label: "Visual Studio Code", isConfident: true },
    { label: "Microsoft PowerApps", isConfident: false },
    { label: "Microsoft SharePoint", isConfident: false },
  ].map((item, index) => ({ ...item, id: index + 1 } as DataSkill)),
};

export const socials: DataSocials = [
  { link: "https://youtube.com", icon: IconBrandYoutube, iconColor: "red" },
  { link: "mailto:ini.dwiii@gmail.com", icon: IconBrandGmail, iconColor: "red" },
  { link: "https://github.com/eternalbeginner", icon: IconBrandGithub, iconColor: "dark" },
  { link: "https://linkedin.com/in/wiipaaa", icon: IconBrandLinkedin, iconColor: "blue" },
  { link: "tel:6281262360039", icon: IconPhoneCall, iconColor: "green" },
].map((item, index) => ({ ...item, id: index + 1 } as DataSocial));
