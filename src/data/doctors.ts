import type { DoctorInfo } from "@/types/input";

export const doctors: DoctorInfo[] = [
  {
    id: "1",
    name: "Dr. Alice Smith",
    specialization: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    patientCases: [
      "Successfully treated a patient with severe arrhythmia using advanced ablation techniques.",
      "Managed a complex case of heart failure with a multidisciplinary approach.",
    ],
    publications: [
      {
        title: "Advancements in Cardiac Ablation",
        subTitle: "A Comprehensive Review",
        content:
          "This publication explores the latest techniques and technologies in cardiac ablation, highlighting their effectiveness in treating arrhythmias.",
      },
      {
        title: "Heart Failure Management Strategies",
        subTitle: "Integrating Multidisciplinary Care",
        content:
          "An in-depth analysis of various strategies for managing heart failure, emphasizing the importance of a team-based approach.",
      },
    ],
    socialMedias: [
      {
        content: "@DrAliceCardio",
        platform: "Twitter",
      },
      {
        content: "linkedin.com/in/dralicesmith",
        platform: "LinkedIn",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Bob Johnson",
    specialization: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    patientCases: [
      "Diagnosed and treated a rare case of autoimmune encephalitis.",
      "Implemented a successful rehabilitation program for stroke patients.",
    ],
    publications: [
      {
        title: "Autoimmune Encephalitis: Diagnosis and Treatment",
        subTitle: "Clinical Insights",
        content:
          "This article provides clinical insights into the diagnosis and treatment of autoimmune encephalitis, based on recent case studies.",
      },
      {
        title: "Stroke Rehabilitation Techniques",
        subTitle: "Improving Patient Outcomes",
        content:
          "A review of effective rehabilitation techniques for stroke patients, focusing on enhancing recovery and quality of life.",
      },
    ],
    socialMedias: [
      {
        content: "Hello Guys, I am fine, Twitter",
        platform: "Twitter",
      },
      {
        content: "Hello Guys, I am fine, Facebook",
        platform: "Facebook",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Carol Lee",
    specialization: "Oncologist",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    patientCases: [
      "Led a clinical trial for a new targeted therapy in breast cancer.",
      "Provided palliative care for advanced cancer patients, improving quality of life.",
    ],
    publications: [
      {
        title: "Targeted Therapies in Breast Cancer",
        subTitle: "Clinical Trial Results",
        content:
          "This publication presents the results of a clinical trial investigating the efficacy of a new targeted therapy for breast cancer patients.",
      },
      {
        title: "Palliative Care in Oncology",
        subTitle: "Enhancing Patient Comfort",
        content:
          "An exploration of palliative care approaches in oncology, focusing on strategies to improve patient comfort and well-being.",
      },
    ],
    socialMedias: [
      {
        content: "@DrCarolOnco",
        platform: "Twitter",
      },
      {
        content: "linkedin.com/in/drcarollee",
        platform: "LinkedIn",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. David Kim",
    specialization: "Pediatrician",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    patientCases: [
      "Successfully managed a case of pediatric asthma with a personalized treatment plan.",
      "Conducted community outreach programs to promote childhood vaccination.",
    ],
    publications: [
      {
        title: "Personalized Treatment Plans for Pediatric Asthma",
        subTitle: "Improving Patient Outcomes",
        content:
          "This article discusses the benefits of personalized treatment plans in managing pediatric asthma, supported by recent case studies.",
      },
      {
        title: "Promoting Childhood Vaccination",
        subTitle: "Community Outreach Strategies",
        content:
          "An overview of effective community outreach strategies to increase childhood vaccination rates and improve public health.",
      },
    ],
    socialMedias: [
      {
        content: "@DrDavidPeds",
        platform: "Twitter",
      },
      {
        content: "linkedin.com/in/drdavidkim",
        platform: "LinkedIn",
      },
    ],
  },
];

export const user: DoctorInfo = {
  id: "0",
  name: "Dr. John Doe",
  specialization: "General Practitioner",
  image: "https://example.com/images/dr-john-doe.jpg",
  patientCases: [
    "Managed over 500 patient cases with a focus on preventive care and chronic disease management.",
    "Implemented a successful telemedicine program to enhance patient access to care.",
  ],
  publications: [
    {
      title: "Preventive Care in Primary Practice",
      subTitle: "Strategies for Success",
      content:
        "This publication outlines effective strategies for implementing preventive care in primary practice, aiming to improve patient outcomes.",
    },
    {
      title: "Telemedicine in General Practice",
      subTitle: "Expanding Access to Care",
      content:
        "An exploration of telemedicine applications in general practice, highlighting benefits and challenges in expanding patient access to healthcare services.",
    },
  ],
  socialMedias: [
    {
      content: "@DrJohnGP",
      platform: "Twitter",
    },
    {
      content: "linkedin.com/in/drjohndoe",
      platform: "LinkedIn",
    },
  ],
};
