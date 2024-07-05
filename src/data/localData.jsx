//icons
import { IoMdArrowDropdown } from "react-icons/io";

export const headerMenu = [
  { id: 1, title: "صفحه اصلی", paths: "/" },
  { id: 2, title: "خدمات", paths: "/", icon: <IoMdArrowDropdown /> },
  {
    id: 3,
    title: "تماس با ما",
    paths: "/contact-us",
  },
  {
    id: 4,
    title: "درباره ما",
    paths: "/about",
    icon: <IoMdArrowDropdown size={30} />,
  },
  {
    id: 5,
    title: "مسیریابی",
    paths: "/about",
    paths: "/google",
  },
];
