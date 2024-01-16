export const items = () => [
  {
    label: "Test Series",
    expandable: false,
    // path: '/test-series',
  },
  {
    label: "Course",

    // path: '/courses',
  },
  {
    label: "Syllabus",

    path: "/syllabus",
  },
  {
    label: "Free Resources",
    expandable: true,
    // path: '/results',
    childs: [
      // { label: 'Notes', path: '/free-resources/notes' },
      // { label: 'Books', path: '/free-resources/books' },
      { label: "Previous Papers", path: "/free-resources/papers" },
      { label: "Free Videos", path: "/free-resources/video" },
    ],
  },
  {
    label: "Achievements",
    expandable: true,
    // path: '/results',
    childs: [
      { label: "Results", path: "/results" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Placements", path: "/placements" },
    ],
  },

  {
    label: "Contact Us",
    size: 4,
  },
  {
    label: "About US",
    size: 4,
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
  },
];
