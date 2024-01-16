export const items = () => [
  {
    label: "Services",
    expandable: false,
    path: "/services",
  },
  {
    label: "About Us",
    expandable: true,
    childs: [
      { label: "Our Team", link: "/team" },

      { label: "Our Founder", link: "/ca-sreenivasa-rao" },

      { label: "Testimonials", link: "/testimonials" },

      { label: "Faqs", link: "/team" },

      { label: "Contact Us", link: "/contact" },
    ],
    // path: '/courses',
  },
  {
    label: "Industry Compass",
  },
  {
    label: "Portfolio",
  },
  {
    label: "Resources",
    expandable: true,
  },
];
