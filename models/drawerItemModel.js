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

      { label: "Faqs", link: "/team" },
    ],
  },
  { label: "Contact Us", link: "/contact" },
  {
    label: "Industry Compass",
    link: "/industry-compass",
  },

  {
    label: "Login",
    href: true,
    childs: [
      { label: "Client Login", link: "client.srisudhaconsultancy.com" },

      { label: "Employee Login", link: "emp.srisudhaconsultancy.com" },
    ],
  },
];
