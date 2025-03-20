import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

import TabPage from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import { Stack } from "@mui/material";

const App = ()=> {
  return (
    <Router>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems={"center"}
        direction="row"
        sx={{ padding: "20px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Stack>

      <Routes>
        <Route path="/" element={<TabPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
