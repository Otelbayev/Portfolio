import { Icons } from "../components/Sidebar/style";
import { useReplace } from "../hooks/useReplace";

export const navbarUz = [
  { id: 1, title: "Asosiy", path: "/", icon: <Icons.Home /> },
  { id: 2, title: "Men haqimda", path: "/about", icon: <Icons.About /> },
  {
    id: 3,
    title: "Loihalar",
    path: `/projects${useReplace("project", "all")}`,
    icon: <Icons.Projects />,
  },
  { id: 4, title: "Bog'lanish", path: "/contact", icon: <Icons.Contact /> },
];

export const navbarRu = [
  { id: 1, title: "Главная", path: "/", icon: <Icons.Home /> },
  { id: 2, title: "Обо Мне", path: "/about", icon: <Icons.About /> },
  {
    id: 3,
    title: "Проекты",
    path: `/projects${useReplace("project", "all")}`,
    icon: <Icons.Projects />,
  },
  { id: 4, title: "Контакт", path: "/contact", icon: <Icons.Contact /> },
];

export const navbarEn = [
  { id: 1, title: "Main", path: "/", icon: <Icons.Home /> },
  { id: 2, title: "About Me", path: "/about", icon: <Icons.About /> },
  {
    id: 3,
    title: "Projects",
    path: `/projects${useReplace("project", "all")}`,
    icon: <Icons.Projects />,
  },
  { id: 4, title: "Contact", path: "/contact", icon: <Icons.Contact /> },
];

export const mainUz = {
  name: "O'telbayev Jasurbek",
  job: "Frontend Dasturchisi",
};

export const mainRu = {
  name: "Утелбайев Жасурбек",
  job: "Фронтенд разработчик",
};

export const mainEn = {
  name: "Otelbayev Jasurbek",
  job: "Frontend Developer",
};
