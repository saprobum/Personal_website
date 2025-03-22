import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router";

import TabPage from "./Pages/HomePage";
import PortFolioPage from "./Pages/PortfolioPage";
import About from "./Pages/AboutPage";
import { Stack } from "@mui/material";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
  ];

  return (
    <Stack sx={{margin:"20px"}} direction={"row"} justifyContent={"center"} spacing={2}>
      {links.map((link, index) => (
        <Link
          to={link.to}
          key={index}
          className={`text-lg ${location.pathname === link.to ? 'bg-blue-500 text-white px-4 py- rounded' : 'text-[red] hover:bg-gray-100  rounded'}`}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );
};




const App = () => {
  return (
    <Router>
      <NavLinks />
      <Routes>
        <Route path="/" element={<TabPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortFolioPage />} />
      </Routes>
    </Router>
  );
};
export default App;
