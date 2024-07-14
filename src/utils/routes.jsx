import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";

export const routes = [
  {
    id: 1,
    element: <Home />,
    path: "/",
  },
  {
    id: 2,
    element: <About />,
    path: "/about",
  },
  {
    id: 3,
    element: <Projects />,
    path: "/projects",
  },
  {
    id: 4,
    element: <Contact />,
    path: "/contact",
  },
];
