import { certifications, educations, experiences, skills } from "@/data/common";

export const data = {
  certification: {
    title: "Certification",
    items: certifications,
  },
  education: {
    title: "Education",
    items: educations,
  },
  experience: {
    title: "Experience",
    items: experiences,
  },
  skill: {
    title: "Skill",
    items: [
      { label: "Soft", items: skills.soft },
      { label: "Language", items: skills.language },
      { label: "Framework", items: skills.framework },
      { label: "Tool", items: skills.tool },
    ].map((item, index) => ({ ...item, id: index + 1 })),
  },
};
