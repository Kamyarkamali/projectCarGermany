//icons
import { IoMdArrowDropdown } from "react-icons/io";

//images
import image1 from "../assets/slidercar/1.webp";
import image2 from "../assets/slidercar/2.webp";
import image3 from "../assets/slidercar/3.webp";
import image4 from "../assets/slidercar/4.webp";
import image5 from "../assets/slidercar/5.webp";

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

export const sliderImage = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
];
